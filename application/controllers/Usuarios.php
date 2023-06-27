<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios extends CI_Controller {

	public function __construct(){
		parent::__construct();
		if(!$this->session->userdata('usuario')){
			redirect(base_url());
		}
		$this->load->library('session');
		$this->load->model('Usuarios_Model');
	}

	public function index()
	{
		$this->load->view('usuarios/index');
	}

    public function listar(){
        // argumentos
        $arg = [
            'limit' => $this->input->get('limit'),
            'offset' => $this->input->get('offset')
        ];
        $usuarios = $this->Usuarios_Model->listar($arg);
        // Convertir el estado en texto para mostrarlo en la tabla de usuarios
        foreach($usuarios->usuarios as $usuario){
            $usuario->nuevaContrasena = '';
            $usuario->confirmarContrasena = '';
        }
        echo json_encode($usuarios);
    }

    public function perfil($usuario = false){
        if(!$usuario){
            $usuario = $this->session->userdata('usuario');
            echo json_encode([
                'status' => true,
                'usuario' => $usuario['usuario']
            ]);
        } else {
            $usuario = $this->Usuarios_Model->perfil($usuario);
            if($usuario['status'] == false){
                echo json_encode([
                    'status' => false,
                    'mensaje' => 'Usuario no encontrado'
                ]);
            } else {
                echo json_encode([
                    'status' => true,
                    'usuario' => $usuario['usuario']
                ]);
            }
        }
    }

    public function editar_usuario(){
        $id_usuario = $this->input->post('id_usuario');
        $nombre = $this->input->post('nombre');
        $newUsername = $this->input->post('username');
        $apellido = $this->input->post('apellido');
        $email = $this->input->post('correo');
        $password = $this->input->post('nuevaContrasena');
        $tipo_usuario = $this->input->post('tipo_usuario');
        $estado = $this->input->post('estado');

        $usuario = $this->Usuarios_Model->editar_usuario($id_usuario, $nombre, $apellido, $email, md5($password), $newUsername, $tipo_usuario, $estado);
        if($usuario['status'] == true){
            echo json_encode([
                'status' => true,
                'mensaje' => 'Usuario actualizado correctamente'
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'mensaje' => 'Error al actualizar usuario'
            ]);
        }
    }

    public function detalles($id_usuario){
        $detalles = $this->Usuarios_Model->detalles($id_usuario);
        if($detalles){
            echo json_encode([
                'status' => true,
                'detalles' => $detalles->pagos,
                'total' => $detalles->total,
                'mensaje' => 'Usuario encontrado'
            ]);
        } else {
            echo json_encode([
                'status' => false,
            ]);
        }
    }

    public function eliminar_usuario($id_usuario){
        $usuario = $this->Usuarios_Model->eliminar_usuario($id_usuario);
        if($usuario['status'] == true){
            echo json_encode([
                'status' => true,
                'mensaje' => 'Usuario eliminado correctamente'
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'mensaje' => 'Error al eliminar usuario'
            ]);
        }
    }

    public function crear_usuario(){
        $nombre = $this->input->post('nombre');
        $apellido = $this->input->post('apellido');
        $username = $this->input->post('username');
        $email = $this->input->post('correo');
        $contrasena = $this->input->post('contrasena');
        $tipo_usuario = $this->input->post('tipo_usuario');
        $estado = $this->input->post('estado');

        $usuario = $this->Usuarios_Model->crear_usuario($nombre, $apellido, $username, $email, md5($contrasena), $tipo_usuario, $estado);
        if($usuario['status'] == true){
            echo json_encode([
                'status' => true,
                'mensaje' => 'Usuario creado correctamente'
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'mensaje' => 'Error al crear usuario'
            ]);
        }
    }

    public function agregar_pago(){
        $id_usuario = $this->input->post('id_usuario');
        $tipo_pago = $this->input->post('tipo_pago');
        $monto = $this->input->post('monto');
        $cantidad = $this->input->post('cantidad');
        $fecha = $this->input->post('fecha');
        $descripcion = $this->input->post('descripcion');

        // convertir fecha a formato de base de datos
        $fecha = date('Y-m-d', strtotime($fecha));

        $pago = $this->Usuarios_Model->agregar_pago($id_usuario, $tipo_pago, $monto, $cantidad, $fecha, $descripcion);
        if($pago['status'] == true){
            echo json_encode([
                'status' => true,
                'mensaje' => 'Pago agregado correctamente'
            ]);
        } else {
            echo json_encode([
                'status' => false,
                'mensaje' => 'Error al agregar pago'
            ]);
        }
    }

    public function mis_pagos(){
        // id_usuario de la sesion
        $id_usuario = $this->session->userdata('usuario')['usuario']->id_usuario;
        $pagos = $this->Usuarios_Model->mis_pagos($id_usuario);
        echo json_encode($pagos);
    }
}

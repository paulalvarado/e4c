<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Usuarios_model extends CI_Model
{

  // ------------------------------------------------------------------------

  public function __construct()
  {
    parent::__construct();
  }

  public function listar($arg)
  {
    $this->db->select('id_usuario, username, nombre, apellido, email, tipo_usuario, estado');
    $this->db->from('usuarios');
    // $this->db->where('estado', 1);
    if ($arg['limit'] && $arg['limit'] >= 1) {
      $this->db->limit($arg['limit']);
    }
    if ($arg['offset'] && $arg['offset'] >= 1) {
      $this->db->offset($arg['offset']);
    }
    $query = $this->db->get();
    $data = new stdClass();
    $data->usuarios = $query->result();
    $data->total = $this->db->count_all_results('usuarios');
    return $data;
  }

  public function perfil($usuario)
  {
    $this->db->select('id_usuario, username, nombre, apellido, email, tipo_usuario, estado');
    $this->db->from('usuarios');
    $this->db->where('estado', 1);
    $this->db->where('username', $usuario);
    $query = $this->db->get();
    // Si no encuentra el usuario, retorna array con status false
    if ($query->num_rows() == 0) {
      return [
        'status' => false
      ];
    } else {
      return [
        'status' => true,
        'usuario' => $query->row()
      ];
    }
  }

  public function editar_usuario($id, $nombre = false, $apellido = false, $email = false, $password = false, $newUsername = false, $tipo_usuario = false, $estado = false)
  {
    $data = [];

    if ($nombre) {
      $data['nombre'] = $nombre;
    }

    if ($apellido) {
      $data['apellido'] = $apellido;
    }

    if ($email) {
      $data['email'] = $email;
    }

    if ($password) {
      $data['contrasena'] = $password;
    }

    if ($newUsername) {
      $data['username'] = $newUsername;
    }

    if ($tipo_usuario) {
      $data['tipo_usuario'] = $tipo_usuario;
    }

    if ($estado) {
      $data['estado'] = $estado;
    }
    $this->db->where('id_usuario', $id);
    $this->db->update('usuarios', $data);
    return [
      'status' => true
    ];
  }

  public function detalles($id_usuario){
    // extraer los pagos de un usuario de la tabla pagos
    $this->db->select('id_pago, id_usuario, tipo_pago, monto, cantidad, total, fecha, comentarios');
    $this->db->from('pagos');
    $this->db->where('id_usuario', $id_usuario);
    $query = $this->db->get();
    if (count($query->result()) > 0) {
      $data = new stdClass();
      $data->pagos = $query->result();
      $data->total = count($query->result());
      return $data;
    } else {
      return false;
    }
  }

  public function eliminar_usuario($id_usuario){
    $this->db->where('id_usuario', $id_usuario);
    $this->db->delete('usuarios');
    return [
      'status' => true
    ];
  }

  public function crear_usuario($nombre, $apellido, $email, $username, $password, $tipo_usuario){
    $data = [
      'nombre' => $nombre,
      'apellido' => $apellido,
      'email' => $email,
      'username' => $username,
      'contrasena' => $password,
      'tipo_usuario' => $tipo_usuario,
      'estado' => 1
    ];
    $this->db->insert('usuarios', $data);
    return [
      'status' => true
    ];
  }

  public function agregar_pago($id_usuario, $tipo_pago, $monto, $cantidad, $fecha, $comentarios = ""){
    $data = [
      'id_usuario' => $id_usuario,
      'tipo_pago' => $tipo_pago,
      'monto' => $monto,
      'cantidad' => $cantidad,
      'fecha' => $fecha,
      'comentarios' => $comentarios
    ];
    $this->db->insert('pagos', $data);
    return [
      'status' => true
    ];
  }

  public function mis_pagos($id_usuario){
    $this->db->select('id_pago, id_usuario, tipo_pago, monto, cantidad, fecha, comentarios');
    $this->db->from('pagos');
    $this->db->where('id_usuario', $id_usuario);
    $query = $this->db->get();
    if (count($query->result()) > 0) {
      return $query->result();
    } else {
      return [];
    }
  }

  // ------------------------------------------------------------------------

}

/* End of file Usaurios_model.php */
/* Location: ./application/models/Usaurios_model.php */
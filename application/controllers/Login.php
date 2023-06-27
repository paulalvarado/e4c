<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->model('Login_model');
	}

	public function index()
	{

		if($this->session->userdata('usuario')){
			redirect('dashboard');
		}
		$this->load->view('login/index');
	}

	public function validar(){
		$username = $this->input->post('username');
		$contrasena = $this->input->post('contrasena');
		$usuario = $this->Login_model->validar($username, md5($contrasena));

		if($usuario['status'] == true){
			$this->session->set_userdata('usuario', $usuario);
			echo json_encode([
				'status' => true,
				'mensaje' => '¡Bienvenido!',
				'usuario' => $usuario
			]);
		}else{
			echo json_encode([
				'status' => false,
				'mensaje' => 'Usuario o contraseña incorrectos'
			]);
		}
	}

	public function logout(){
		$this->session->sess_destroy();
		redirect('login');
	}
}

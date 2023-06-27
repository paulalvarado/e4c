<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Dashboard extends CI_Controller
{
    
  public function __construct()
  {
    parent::__construct();

    if (!$this->session->userdata('usuario')) {
      redirect('login');
    }
  }

  public function index()
  {
    $usuario = $this->session->userdata('usuario');
    $data = [
      'titulo' => 'Dashboard',
      'subtitulo' => 'Panel de control',
      'usuario' => $usuario['usuario']
    ];
    // si es administrador mostrar el dashboard de administrador
    if ($usuario['usuario']->tipo_usuario == 1) {
      $this->load->view('dashboard/administrador', $data);
      return;
    } else {
      // si es usuario mostrar el dashboard de usuario
      $this->load->view('dashboard/usuario', $data);
      return;
    }
  }

}


/* End of file Dashboard.php */
/* Location: ./application/controllers/Dashboard.php */
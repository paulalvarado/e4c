<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login_model extends CI_Model
{

  // ------------------------------------------------------------------------

  public function __construct()
  {
    parent::__construct();
  }

  // ------------------------------------------------------------------------


  // ------------------------------------------------------------------------
  public function validar($username, $password)
  {
    $this->db->where('username', $username);
    $this->db->where('contrasena', $password);
    $query = $this->db->get('usuarios');
    if ($query->num_rows() == 1) {
      // Delete password
      unset($query->row()->contrasena);
      return ['status' => true, 'usuario' => $query->row()];
    } else {
      return ['status' => false];
    }
  }

  // ------------------------------------------------------------------------

}

/* End of file Login_model.php */
/* Location: ./application/models/Login_model.php */
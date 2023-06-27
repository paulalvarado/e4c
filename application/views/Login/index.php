<!doctype html>
<html lang="en"  data-bs-theme="dark">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bootstrap demo</title>
	<!-- Bootstrap -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>

	<!-- SweetAlert2 -->
	<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
	<!-- Styles Custom -->
	<style>
		html,
		body {
			min-height: 100vh!important;
			margin: 0;
		}
	</style>

</head>

<body class="w-100 h-100" style="height: 100vh!important;">
	<div class="container h-100 align-items-center d-flex">
		<div class="card w-100 m-auto" style="max-width: 25rem;">
			<div class="card-body">
				<h1>Iniciar sesión</h1>
				<form action="" method="post" id="form_login">
					<div class="form-group mb-3">
						<label for="username">Nombre de usuario</label>
						<input type="text" name="username" id="username" class="form-control" placeholder="Nombre de usuario" required>
					</div>
					<div class="form-group mb-3">
						<label for="contrasena">Contraseña</label>
						<input type="password" name="contrasena" id="contrasena" class="form-control" placeholder="Contraseña" required>
					</div>
					<div class="form-group">
						<div class="form-check form-switch">
							<input class="form-check-input" type="checkbox" id="recordar" name="recordar">
							<label class="form-check-label" for="recordar">Recordar sesión</label>
						</div>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<button type="submit" form="form_login" class="btn btn-primary">
					Iniciar sesión
				</button>
			</div>
		</div>
	</div>

	<script>
		jQuery(document).ready(($) => {
			$('#form_login').submit((e) => {
				e.preventDefault();
				let data = $('#form_login').serialize();
				$.post('<?= base_url('login/validar') ?>', {
					username: $('#username').val(),
					contrasena: $('#contrasena').val(),
				}).done((data) => {
					data = JSON.parse(data);
					if (data.status) {
						Swal.fire({
							icon: 'success',
							title: '¡Bienvenido!',
							text: data.mensaje,
							showConfirmButton: false,
							timer: 1500
						}).then(() => {
							window.location.href = '<?= base_url('dashboard') ?>';
						});
					} else {
						Swal.fire({
							icon: 'error',
							title: '¡Error!',
							text: data.mensaje,
							showConfirmButton: false,
							timer: 1500
						});
					}
				}).fail((data) => {
					Swal.fire({
						icon: 'error',
						title: '¡Error!',
						text: 'Ocurrió un error al iniciar sesión',
						showConfirmButton: false,
						timer: 1500
					});
				});
			});
		})
	</script>
</body>

</html>

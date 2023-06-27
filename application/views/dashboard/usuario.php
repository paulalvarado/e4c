<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E4C - <?= $titulo ?></title>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>


    <!-- Poppins Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

    <!-- Font Awesome 6 -->
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.0/css/all.css">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>

    <!-- SweetAlert2 -->
    <link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>

    <!-- DevExtreme -->
    <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/23.1.3/css/dx.light.css" />
    <link rel="stylesheet" type="text/css" href="<?= base_url('dist/examples/dx.material.custom-scheme.css') ?>" />
    <script src="https://cdn3.devexpress.com/jslib/23.1.3/js/dx.all.js"></script>
    <script src="<?= base_url('dist/examples/index_usuario.js') ?>"></script>


    <!-- Styles Custom -->
    <style>
        html,
        body {
            min-height: 100vh !important;
            margin: 0;
        }

        aside {
            background-color: #1a1a1a;
            color: #fff;
            width: 250px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
        }

        .perfil {
            padding: 1rem;
        }

        .foto {
            display: block;
            width: 100%;
        }

        .foto img {
            width: 150px;
        }

        .tipo_usuario,
        .email,
        .username {
            font-family: 'Poppins';
            font-weight: 300;
            margin: 3px 0;
            font-size: 12px;
        }

        .tipo_usuario::before {
            content: "\f2bb";
            font-weight: 300;
            font-family: "Font Awesome 6 Pro";
        }

        .username::before {
            content: "\f007";
            font-weight: 300;
            font-family: "Font Awesome 6 Pro";
        }

        .email::before {
            content: "\f0e0";
            font-weight: 300;
            font-family: "Font Awesome 6 Pro";
        }

        .contenedor {
            padding-left: 250px;
        }
    </style>
</head>

<body>
    <div class="contenedor">
        <aside>
            <div class="perfil">
                <div class="border-bottom pb-3">
                    <div class="foto">
                        <img class="d-block mx-auto my-3" width="200px" src="<?= base_url('dist/img/usuario.png') ?>" alt="Foto de perfil">
                    </div>
                    <div class="info text-center">
                        <h5><?= $usuario->nombre . ' ' . $usuario->apellido ?></h5>
                        <p class="username"> <?= $usuario->username ?></p>
                        <p class="tipo_usuario"> <?= $usuario->tipo_usuario == 1 ? 'Administrador' : 'Usuario' ?></p>
                        <p class="email"> <?= $usuario->email ?></p>
                    </div>
                </div>
            </div>
            <div class="menu px-3">
                <button class="btn btn-secondary w-100 d-block mb-3" onclick="logout()">Cerrar sesión</button>
            </div>
        </aside>
        <div class="main-container p-5">
            <h1 class="mb-3">
                ¡Bienvenido <?= $usuario->nombre . ' ' . $usuario->apellido ?>!
            </h1>
            <div class="demo-container">
                <div class="card">
                    <div class="card-header">
                        Mis pagos
                    </div>
                    <div class="card-body">
                        <div id="gridContainer"></div>
                        <div id="nuevo_pago"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function logout() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¿Deseas cerrar sesión?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#1a1a1a',
                confirmButtonText: 'Sí, cerrar sesión',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "<?= base_url('login/logout') ?>";
                }
            })
        }
    </script>

</body>

</html>
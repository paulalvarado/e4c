const employees = [{
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Prefix: 'Mr.',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St.',
    StateID: 5,
}, {
    ID: 2,
    FirstName: 'Olivia',
    LastName: 'Peyton',
    Prefix: 'Mrs.',
    Position: 'Sales Assistant',
    BirthDate: '1981/06/03',
    HireDate: '2012/05/14',
    Notes: 'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.',
    Address: '807 W Paseo Del Mar',
    StateID: 5,
}, {
    ID: 3,
    FirstName: 'Robert',
    LastName: 'Reagan',
    Prefix: 'Mr.',
    Position: 'CMO',
    BirthDate: '1974/09/07',
    HireDate: '2002/11/08',
    Notes: 'Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.',
    Address: '4 Westmoreland Pl.',
    StateID: 4,
}, {
    ID: 4,
    FirstName: 'Greta',
    LastName: 'Sims',
    Prefix: 'Ms.',
    Position: 'HR Manager',
    BirthDate: '1977/11/22',
    HireDate: '1998/04/23',
    Notes: "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    Address: '1700 S Grandview Dr.',
    StateID: 11,
}, {
    ID: 5,
    FirstName: 'Brett',
    LastName: 'Wade',
    Prefix: 'Mr.',
    Position: 'IT Manager',
    BirthDate: '1968/12/01',
    HireDate: '2009/03/06',
    Notes: 'Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).',
    Address: '1120 Old Mill Rd.',
    StateID: 13,
}];

const usuarios = [{
        "id_usuario": "1",
        "username": "paulperezsv",
        "nombre": "Paúl",
        "apellido": "Pérez",
        "email": "paulperezsv@gmail.com",
        "tipo_usuario": "1",
        "estado": "1"
    },
    {
        "id_usuario": "2",
        "username": "juan.gonzalez",
        "nombre": "Juan",
        "apellido": "González",
        "email": "juan.gonzalez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "3",
        "username": "maria.perez",
        "nombre": "María",
        "apellido": "Pérez",
        "email": "maria.perez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "4",
        "username": "pedro.rodriguez",
        "nombre": "Pedro",
        "apellido": "Rodríguez",
        "email": "pedro.rodriguez@example.com",
        "tipo_usuario": "2",
        "estado": "0"
    },
    {
        "id_usuario": "5",
        "username": "luisa.martinez",
        "nombre": "Luisa",
        "apellido": "Martínez",
        "email": "luisa.martinez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "6",
        "username": "ana.lopez",
        "nombre": "Ana",
        "apellido": "López",
        "email": "ana.lopez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "7",
        "username": "carlos.fernandez",
        "nombre": "Carlos",
        "apellido": "Fernández",
        "email": "carlos.fernandez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "8",
        "username": "laura.ramirez",
        "nombre": "Laura",
        "apellido": "Ramírez",
        "email": "laura.ramirez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "9",
        "username": "jose.torres",
        "nombre": "José",
        "apellido": "Torres",
        "email": "jose.torres@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "10",
        "username": "sofia.vargas",
        "nombre": "Sofía",
        "apellido": "Vargas",
        "email": "sofia.vargas@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "11",
        "username": "andres.lopez",
        "nombre": "Andrés",
        "apellido": "López",
        "email": "andres.lopez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "12",
        "username": "paola.rodriguez",
        "nombre": "Paola",
        "apellido": "Rodríguez",
        "email": "paola.rodriguez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "13",
        "username": "fernando.martinez",
        "nombre": "Fernando",
        "apellido": "Martínez",
        "email": "fernando.martinez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "14",
        "username": "carolina.gomez",
        "nombre": "Carolina",
        "apellido": "Gómez",
        "email": "carolina.gomez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "15",
        "username": "oscar.fernandez",
        "nombre": "Óscar",
        "apellido": "Fernández",
        "email": "oscar.fernandez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "16",
        "username": "valentina.sanchez",
        "nombre": "Valentina",
        "apellido": "Sánchez",
        "email": "valentina.sanchez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "17",
        "username": "emilio.navarro",
        "nombre": "Emilio",
        "apellido": "Navarro",
        "email": "emilio.navarro@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "18",
        "username": "natalia.hernandez",
        "nombre": "Natalia",
        "apellido": "Hernández",
        "email": "natalia.hernandez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "19",
        "username": "adrian.gonzalez",
        "nombre": "Adrián",
        "apellido": "González",
        "email": "adrian.gonzalez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "20",
        "username": "soledad.jimenez",
        "nombre": "Soledad",
        "apellido": "Jiménez",
        "email": "soledad.jimenez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "21",
        "username": "pablo.gomez",
        "nombre": "Pablo",
        "apellido": "Gómez",
        "email": "pablo.gomez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "22",
        "username": "alejandra.vargas",
        "nombre": "Alejandra",
        "apellido": "Vargas",
        "email": "alejandra.vargas@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "23",
        "username": "roberto.santos",
        "nombre": "Roberto",
        "apellido": "Santos",
        "email": "roberto.santos@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "24",
        "username": "lucia.rojas",
        "nombre": "Lucía",
        "apellido": "Rojas",
        "email": "lucia.rojas@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "25",
        "username": "juan.perez",
        "nombre": "Juan",
        "apellido": "Pérez",
        "email": "juan.perez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "26",
        "username": "luisa.hernandez",
        "nombre": "Luisa",
        "apellido": "Hernández",
        "email": "luisa.hernandez@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "27",
        "username": "carlos.silva",
        "nombre": "Carlos",
        "apellido": "Silva",
        "email": "carlos.silva@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "28",
        "username": "mariana.andrade",
        "nombre": "Mariana",
        "apellido": "Andrade",
        "email": "mariana.andrade@example.com",
        "tipo_usuario": "2",
        "estado": "1"
    },
    {
        "id_usuario": "29",
        "username": "javier.mendoza",
        "nombre": "Javier",
        "apellido": "Mendoza",
        "email": "javier.mendoza@example.com",
        "tipo_usuario": "21",
        "estado": "1"
    }
]

const states = [{
    ID: 1,
    Name: 'Alabama',
}, {
    ID: 2,
    Name: 'Alaska',
}, {
    ID: 3,
    Name: 'Arizona',
}, {
    ID: 4,
    Name: 'Arkansas',
}, {
    ID: 5,
    Name: 'California',
}, {
    ID: 6,
    Name: 'Colorado',
}, {
    ID: 7,
    Name: 'Connecticut',
}, {
    ID: 8,
    Name: 'Delaware',
}, {
    ID: 9,
    Name: 'District of Columbia',
}, {
    ID: 10,
    Name: 'Florida',
}, {
    ID: 11,
    Name: 'Georgia',
}, {
    ID: 12,
    Name: 'Hawaii',
}, {
    ID: 13,
    Name: 'Idaho',
}, {
    ID: 14,
    Name: 'Illinois',
}, {
    ID: 15,
    Name: 'Indiana',
}, {
    ID: 16,
    Name: 'Iowa',
}, {
    ID: 17,
    Name: 'Kansas',
}, {
    ID: 18,
    Name: 'Kentucky',
}, {
    ID: 19,
    Name: 'Louisiana',
}, {
    ID: 20,
    Name: 'Maine',
}, {
    ID: 21,
    Name: 'Maryland',
}, {
    ID: 22,
    Name: 'Massachusetts',
}, {
    ID: 23,
    Name: 'Michigan',
}, {
    ID: 24,
    Name: 'Minnesota',
}, {
    ID: 25,
    Name: 'Mississippi',
}, {
    ID: 26,
    Name: 'Missouri',
}, {
    ID: 27,
    Name: 'Montana',
}, {
    ID: 28,
    Name: 'Nebraska',
}, {
    ID: 29,
    Name: 'Nevada',
}, {
    ID: 30,
    Name: 'New Hampshire',
}, {
    ID: 31,
    Name: 'New Jersey',
}, {
    ID: 32,
    Name: 'New Mexico',
}, {
    ID: 33,
    Name: 'New York',
}, {
    ID: 34,
    Name: 'North Carolina',
}, {
    ID: 35,
    Name: 'Ohio',
}, {
    ID: 36,
    Name: 'Oklahoma',
}, {
    ID: 37,
    Name: 'Oregon',
}, {
    ID: 38,
    Name: 'Pennsylvania',
}, {
    ID: 39,
    Name: 'Rhode Island',
}, {
    ID: 40,
    Name: 'South Carolina',
}, {
    ID: 41,
    Name: 'South Dakota',
}, {
    ID: 42,
    Name: 'Tennessee',
}, {
    ID: 43,
    Name: 'Texas',
}, {
    ID: 44,
    Name: 'Utah',
}, {
    ID: 45,
    Name: 'Vermont',
}, {
    ID: 46,
    Name: 'Virginia',
}, {
    ID: 47,
    Name: 'Washington',
}, {
    ID: 48,
    Name: 'West Virginia',
}, {
    ID: 49,
    Name: 'Wisconsin',
}, {
    ID: 50,
    Name: 'Wyoming',
}, {
    ID: 51,
    Name: 'North Dakota',
}];

const estados = [{
        "id_estado": 1,
        "nombre": "Activo"
    },
    {
        "id_estado": 0,
        "nombre": "Inactivo"
    }
];
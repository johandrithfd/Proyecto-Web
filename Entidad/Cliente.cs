using System;
using System.ComponentModel.DataAnnotations;

namespace Entidad {
    public class Cliente : Persona {

        public string Telefono { get; set; }
        public string Celular { get; set; }
        public string Correo { get; set; }
        public string Direccion { get; set; }

        

        public Cliente (string identificacion, string nombres, string primerApellido, string segundoApellido, string telefono, string celular, string direccion, string correo) : base (identificacion, nombres, primerApellido, segundoApellido) {

            Telefono = telefono;
            Celular = celular;
            Direccion= direccion;
            Correo= correo;
            }

        public Cliente()
        {
        }
    }
}
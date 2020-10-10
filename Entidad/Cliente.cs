using System;

namespace Entidad {
    public class Cliente : Persona {

        public string Telefono { get; set; }
        public string Celular {get;set;}
        public string Correo { get; set; }
        public string Direccion { get; set; }

        public Cliente (string identificacion, string nombres, string primerApellido, string segundoApellido,string telefono,string correo,string direccion, string celular) : base (identificacion, nombres, primerApellido, segundoApellido ) { 

            Telefono = telefono;
            Correo = correo;
            Direccion= direccion;
            Celular= celular;
            

        }
    }
}
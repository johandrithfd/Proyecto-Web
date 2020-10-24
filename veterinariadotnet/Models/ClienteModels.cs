using System;
using Entidad;
using System.Collections.Generic;
using System.Linq;

namespace veterinariadotnet.Models
{
    public class ClienteModel
    { 
        public string Identificacion { get; set; }
        public string Nombres { get; set; }
        public string PrimerApellido{ get; set; }
        public string SegundoApellido { get; set; }
        public string Telefono { get; set; }
        public string Celular { get; set; }
        public string Direccion { get; set; }
        public string Correo { get; set; }

    }

    public class ClienteViewModel : ClienteModel
    {
        public ClienteViewModel()
        {

        }

        public ClienteViewModel(Cliente cliente)
        {
            Identificacion = cliente.Identificacion;
            Nombres = cliente.Nombres;
            PrimerApellido = cliente.PrimerApellido;
            SegundoApellido= cliente.SegundoApellido;
            Telefono= cliente.Telefono;
            Celular= cliente.Celular;
            Direccion= cliente.Direccion;
            Correo= cliente.Correo;
            

        
        }
        
  }
}

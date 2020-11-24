using System;
using Entidad;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;

namespace veterinariadotnet.Models
{
    public class ClienteModel
    {   
          
        [Required(ErrorMessage ="La identificacion es requerida")] 
        public string Identificacion { get; set; }
        [Required(ErrorMessage ="los nombres son requeridos")] 
        public string Nombres { get; set; }
        [Required(ErrorMessage ="el primer Apellido son requeridos")]
        public string PrimerApellido{ get; set; }
          
        
        [Required(ErrorMessage ="el segundo Apellido son requeridos")]
        public string SegundoApellido { get; set; }

        [Required(ErrorMessage ="el telefono es requerido")]
        public string Telefono { get; set; }
        
        [Required(ErrorMessage ="el celular es requeridos")]
        public string Celular { get; set; }

        [Required(ErrorMessage ="La Direccion es requerida")] 
        public string Direccion { get; set; }

        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email is not valid.")]  
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

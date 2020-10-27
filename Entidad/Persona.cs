using System;
using System.Security.Cryptography.X509Certificates;
using System.ComponentModel.DataAnnotations;


namespace Entidad {
   public class Persona {
      
      [Key]
      public string Identificacion { get; set; }
      public string Nombres { get; set; }
      public string PrimerApellido { get; set; }
      public string SegundoApellido { get; set; }

      public Persona (string identificacion, string nombres, string primerApellido, string segundoApellido) {

         Identificacion = identificacion;
         Nombres = nombres;
         PrimerApellido = primerApellido;
         SegundoApellido = segundoApellido;
      }

      public Persona()
      {
          
      }
      
}
}
using System;
using System.Security.Cryptography.X509Certificates;

namespace Entidad {
   public class Persona {
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
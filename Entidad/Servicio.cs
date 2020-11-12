using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entidad {
    public class Servicio {
        [Key]
        public int ServicioId { get; set; }
        [StringLength(15)]
        public string Nombre { get; set; }
        [Column(TypeName = "decimal(9, 2)")]
        public decimal Valor { get; set; }
        [StringLength(100)]
        public string Descripcion { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        [Display(Name = "Iva")]
        public double Iva { 
            get
            {
                return 0.21;
            }
        }
    }
}
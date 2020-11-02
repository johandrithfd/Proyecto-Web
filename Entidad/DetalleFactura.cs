using System;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entidad
{
    public class DetalleFactura
    {
        [Key]
        public int IdDetalleFactura {get; set;}
        [Column(TypeName = "decimal(5, 2)")]
        public decimal ValorServicio {get; set;}
        [Column(TypeName = "Int")]
        public int Cantidad {get; set;}
        [Column(TypeName = "decimal(4, 2)")]
        public decimal PorcentajeIva {get; set;}
        [Column(TypeName = "decimal(4, 2)")]
        public decimal PorcentajeDescueto {get; set;}

        [Display(Name = "SubTotal")]
        public decimal SubTotal 
        {
            get{
                return ValorServicio * Cantidad;
            }
        }
        [Display(Name = "ValorIva")]
        public decimal ValorIva 
        {
            get{
                return SubTotal * PorcentajeIva;
            }
        }
        [Display(Name = "ValorDescuento")]
        public decimal ValorDescuento
        {
            get{
                return SubTotal * PorcentajeDescueto;
            }
        }
        [Display(Name = "Total")]
        public decimal Total 
        {
            get{
                return SubTotal + ValorIva - ValorDescuento;
            }
        }
        public int IdFactura { get; set; }
        public virtual Factura Factura { get; set; }

        public int IdServicio { get; set; }
        public virtual Servicio Servicio {get; set;}
    }
}

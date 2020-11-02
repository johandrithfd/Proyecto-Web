using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Entidad
{
    public class Factura
    {
        [Key]
        public int IdFactura { get; set; }
        
        public DateTime Fecha { get; set; }
        public int CantidadServicios 
        {
            get{
                return DetallesFactura.Count();
            }
        }
        
        [Display(Name = "SubTotal")]
        public decimal SubTotal 
        {
            get{
                return DetallesFactura.Sum(s => s.SubTotal);
            }
        }
        [Display(Name = "ValorIva")]
        public decimal ValorIva 
        {
            get{
                return  DetallesFactura.Sum(s => s.ValorIva); 
            }
        }
        [Display(Name = "ValorDescuento")]
        public decimal ValorDescuento
        {
            get{
                return DetallesFactura.Sum(s => s.ValorDescuento); 
            }
        }
        [Display(Name = "Total")]
        public decimal Total 
        {
            get{
                return SubTotal  + ValorIva - ValorDescuento;
            }
        }
        public string Identificacion { get; set; }
        public virtual Cliente Cliente { get; set; }
        public virtual List<DetalleFactura> DetallesFactura { get; set; }
    }
}

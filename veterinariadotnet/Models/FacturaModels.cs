using System;
using System.Collections.Generic;
using Entidad;

namespace veterinariadotnet.Models
{
    public class FacturaInputModel
    {
        public DateTime Fecha { get; set; }
        public virtual List<DetalleFactura> DetallesFactura { get; set; }
        public virtual Cliente Cliente { get; set; }
    }
    public class FacturaViewModel : FacturaInputModel
    {
        public FacturaViewModel()
        {
            
        }
        public FacturaViewModel(Factura factura)
        {
            CantidadServicios = factura.CantidadServicios;
            Fecha = factura.Fecha;
            DetallesFactura = factura.DetallesFactura;
            Cliente = factura.Cliente;
            IdFactura = factura.IdFactura;
            SubTotal = factura.SubTotal;
            ValorIva = factura.ValorIva;
            ValorDescuento = factura.ValorDescuento;
            Total = factura.Total;
        }
        public int IdFactura { get; set; }
        public decimal SubTotal { get; set; }
        public decimal ValorIva { get; set; }
        public decimal ValorDescuento { get; set; }
        public decimal Total { get; set; }
        public int CantidadServicios { get; set; }
    }
}

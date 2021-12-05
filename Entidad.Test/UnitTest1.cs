using NUnit.Framework;
using System.Collections.Generic;

namespace Entidad.Test
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void CalcularValorTotalFactura()
        {
            List<DetalleFactura> detallesFactura = new List<DetalleFactura>
            {
                new DetalleFactura(5000, 2, 0.19, 0.1)
            };

            Factura factura = new Factura(detallesFactura);
            
            Assert.AreEqual(11890, factura.Total);
        }

        [Test]
        public void CalcularValorTotalCuandoEstaExcentaDeIva()
        {
            List<DetalleFactura> detallesFactura = new List<DetalleFactura>
            {
                new DetalleFactura(5000, 2, 0, 0.1)
            };

            Factura factura = new Factura(detallesFactura);

            Assert.AreEqual(9990, factura.Total);
        }

        [Test]
        public void CalcularValorTotalCuandoNoHayDescuento()
        {
            List<DetalleFactura> detallesFactura = new List<DetalleFactura>
            {
                new DetalleFactura(5000, 2, 0.19, 0)
            };

            Factura factura = new Factura(detallesFactura);

            Assert.AreEqual(11900, factura.Total);
        }

        [Test]
        public void CalcularValorTotalCuandoNoHayDescuentoYEstaExcentaIva()
        {
            List<DetalleFactura> detallesFactura = new List<DetalleFactura>
            {
                new DetalleFactura(5000, 2, 0, 0)
            };

            Factura factura = new Factura(detallesFactura);

            Assert.AreEqual(10000, factura.Total);
        }
    }
}
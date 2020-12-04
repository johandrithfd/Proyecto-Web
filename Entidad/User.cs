using System;
using System.ComponentModel.DataAnnotations;


namespace Entidad
{
    public class User
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
        public string identificacion { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string MobilePhone { get; set; }
    }
}

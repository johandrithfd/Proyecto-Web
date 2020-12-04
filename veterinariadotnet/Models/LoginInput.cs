using System;
using System.ComponentModel.DataAnnotations;
using Entidad;

namespace veterinariadotnet.Models
{
       public class LoginInputModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }

    public class LoginViewModel : LoginInputModel
    {
       public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public string Role { get; set; }
        public string Identificacion { get; set; }
        public string Email { get; set; }
        public string MobilePhone { get; set; } 
        

        public string Token { get; set; }

        public LoginViewModel() { }

        public LoginViewModel(User usr)
        {
            Username= usr.UserName;
            Password= usr.Password;
            FirstName= usr.FirstName;
            Role =usr.Role;
            LastName= usr.LastName;
            Identificacion = usr.identificacion;
            Email = usr.Email;
            MobilePhone = usr.MobilePhone;
        }
    }
}

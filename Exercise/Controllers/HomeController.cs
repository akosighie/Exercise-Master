using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Exercise.Controllers.CustomController;
using Exercise.Models;

namespace Exercise.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public JsonResult GetPets()
        {

            var petList = new List<Pets>
            {
                new Pets() {PetName = "Rover"},
                new Pets() {PetName = "Fido"},
                new Pets() {PetName = "Pixie"}
            };

            return new JsonNetResult()
            {
                Data = petList
            };
        }

    }
}

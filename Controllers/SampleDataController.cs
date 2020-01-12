using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using angular.Models;
namespace angular.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }
        [HttpGet("[action]")]
        public IEnumerable<Employees> GetEmps()
        {
            return new List<Employees>(){
                    new Employees(){
                        firstname="raju",
                        lastname="gaddam",
                        Salary=30000,
                        Gender="Male",
                        Address="India"
                    }
                    ,
                    
                    new Employees(){
                        Id=1,
                        firstname="raju",
                        lastname="gaddam",
                        Salary=30000,
                        Gender="Male",
                        Address="India"
                    }
                    ,
                    
                    new Employees(){
                        Id=2,
                        firstname="raju",
                        lastname="gaddam",
                        Salary=30000,
                        Gender="Male",
                        Address="India"
                    }
                    ,
                    
                    new Employees(){
                        Id=3,
                        firstname="raju",
                        lastname="gaddam",
                        Salary=30000,
                        Gender="Male",
                        Address="India"
                    }
            };
        }
    
        public class WeatherForecast
        {
            
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

        
    }
     public class Employees
        {
            public int Id {get;set;}
            public string  firstname {get;set;}
            public string  lastname {get;set;}
            public string  Gender {get;set;}
            public string  Address {get;set;}
            public int Salary {get;set;}
        }
}

using System;
using TaylorMade.Data.Models;

namespace TaylorMade.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting...");

            //using (var context = new TaylorMadeContext())
            //{
            //    var job = new Job()
            //    {
            //        Id = Guid.NewGuid(),
            //        Name = "New Job",
            //        StartDate = DateTimeOffset.Now,
            //        FinishDate = DateTimeOffset.Now.AddMonths(4),
            //        QuotedCost = 10000,
            //        ActualCost = 7000,
            //        Description = "Test Job Description"
            //    };
            //    context.Job.Add(job);
            //    context.SaveChanges();
            //}

            Console.WriteLine("Finished!");
        }
    }
}

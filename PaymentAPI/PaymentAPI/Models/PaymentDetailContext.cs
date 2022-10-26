using Microsoft.EntityFrameworkCore;

namespace PaymentAPI.Models
{
    public class PaymentDetailContext: DbContext
    {
        public PaymentDetailContext() : base()
        {

        }
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options) : base(options)
        {
        }

       
        public DbSet<PaymentDetail> PaymentDetails { get; set; }

    }
}

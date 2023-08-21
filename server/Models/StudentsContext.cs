using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace server.Models;

public partial class StudentsContext : DbContext
{
    public StudentsContext()
    {
    }

    public StudentsContext(DbContextOptions<StudentsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Student> Students { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //    => optionsBuilder.UseSqlServer("Server=ANJALA-PC\\SQLEXPRESS;Database=students;Trusted_Connection=True;Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Student>(entity =>
        {
            entity.ToTable("student");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .IsFixedLength()
                .HasColumnName("address");
            entity.Property(e => e.DateOfBirth)
                .HasColumnType("date")
                .HasColumnName("date_of_birth");
            entity.Property(e => e.Email)
                .HasMaxLength(20)
                .IsFixedLength()
                .HasColumnName("email");
            entity.Property(e => e.FirstName)
                .HasMaxLength(20)
                .IsFixedLength()
                .HasColumnName("first_name");
            entity.Property(e => e.LastName)
                .HasMaxLength(20)
                .IsFixedLength()
                .HasColumnName("last_name");
            entity.Property(e => e.Mobile)
                .HasMaxLength(20)
                .IsFixedLength()
                .HasColumnName("mobile");
            entity.Property(e => e.Nic)
                .HasMaxLength(20)
                .IsFixedLength()
                .HasColumnName("nic");
            entity.Property(e => e.ProfilePic)
                .HasMaxLength(50)
                .IsFixedLength()
                .HasColumnName("profile_pic");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

CREATE TABLE [dbo].[Employee]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Title] INT NOT NULL, 
    [HourlyPay] MONEY NOT NULL, 
	[StartDate] DATETIMEOFFSET NULL, 
    [FinishDate] DATETIMEOFFSET NULL, 
	[Email] NVARCHAR(50) NULL,
    [ContactNumber] NVARCHAR(20) NULL,
    [Description] NVARCHAR(250) NULL
)

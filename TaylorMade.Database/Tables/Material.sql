CREATE TABLE [dbo].[Material]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Quantity] INT NOT NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Cost] MONEY NOT NULL, 
    [Description] NVARCHAR(250) NULL
)

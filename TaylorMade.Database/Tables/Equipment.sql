CREATE TABLE [dbo].[Equipment]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Quantity] INT NOT NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Cost] MONEY NOT NULL, 
    [Location] NVARCHAR(150) NULL,
    [Description] NVARCHAR(250) NULL
)

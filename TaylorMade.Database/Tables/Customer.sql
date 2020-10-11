CREATE TABLE [dbo].[Customer]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Address] NVARCHAR(250) NULL,
    [Email] NVARCHAR(50) NULL,
    [ContactNumber] NVARCHAR(20) NULL,
    [Description] NVARCHAR(250) NULL
)

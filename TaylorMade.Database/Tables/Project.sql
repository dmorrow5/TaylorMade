CREATE TABLE [dbo].[Project]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
	[ProjectTypeId] UNIQUEIDENTIFIER NOT NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [PropertyType] INT NOT NULL, 
    [Description] NVARCHAR(250) NULL,

    CONSTRAINT [FK_Project_ProjectType] FOREIGN KEY ([ProjectTypeId]) REFERENCES [ProjectType]([Id])
)

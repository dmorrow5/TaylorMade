CREATE TABLE [dbo].[Contract]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
	[CustomerId] UNIQUEIDENTIFIER NOT NULL, 
	[ProjectId] UNIQUEIDENTIFIER NOT NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [StartDate] DATETIMEOFFSET NOT NULL, 
    [FinishDate] DATETIMEOFFSET NULL, 
    [EstimatedCost] MONEY NULL, 
    [ActualCost] MONEY NULL, 
    [QuoteAccepted] BIT NULL, 
    [Notes] NVARCHAR(250) NULL,
	
    CONSTRAINT [FK_Contract_Customer] FOREIGN KEY ([CustomerId]) REFERENCES [Customer]([Id]),
    CONSTRAINT [FK_Contract_Project] FOREIGN KEY ([ProjectId]) REFERENCES [Project]([Id])
)

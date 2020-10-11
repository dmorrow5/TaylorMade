CREATE TABLE [dbo].[LineItem]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
	[ProjectId] UNIQUEIDENTIFIER NOT NULL, 
	[EquipmentId] UNIQUEIDENTIFIER NULL, 
	[MaterialId] UNIQUEIDENTIFIER NULL, 
	[ContractFeeId] UNIQUEIDENTIFIER NULL, 
	[EmployeeId] UNIQUEIDENTIFIER NULL, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Quantity] INT NOT NULL, 
    [Description] NVARCHAR(250) NULL,

    CONSTRAINT [FK_LineItem_Project] FOREIGN KEY ([ProjectId]) REFERENCES [Project]([Id]),
    CONSTRAINT [FK_LineItem_Equipment] FOREIGN KEY ([EquipmentId]) REFERENCES [Equipment]([Id]),
    CONSTRAINT [FK_LineItem_Material] FOREIGN KEY ([MaterialId]) REFERENCES [Material]([Id]),
    CONSTRAINT [FK_LineItem_ContractFee] FOREIGN KEY ([ContractFeeId]) REFERENCES [ContractFee]([Id]),
    CONSTRAINT [FK_LineItem_Employee] FOREIGN KEY ([EmployeeId]) REFERENCES [Employee]([Id]),
)

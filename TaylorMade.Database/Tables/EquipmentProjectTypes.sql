CREATE TABLE [dbo].[EquipmentProjectTypes]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [EquipmentId] UNIQUEIDENTIFIER NOT NULL, 
	[ProjectTypeId] UNIQUEIDENTIFIER NOT NULL,
	
    CONSTRAINT [FK_EquipmentProjectTypes_Equipment] FOREIGN KEY ([EquipmentId]) REFERENCES [Equipment]([Id]),
    CONSTRAINT [FK_EquipmentProjectTypes_ProjectType] FOREIGN KEY ([ProjectTypeId]) REFERENCES [ProjectType]([Id])
)

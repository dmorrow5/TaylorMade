﻿CREATE TABLE [dbo].[ContractFee]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] NVARCHAR(50) NOT NULL, 
    [Cost] MONEY NOT NULL, 
    [Description] NVARCHAR(250) NULL
)

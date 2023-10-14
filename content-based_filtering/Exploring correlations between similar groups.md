 Exploring correlations between similar groups
 
 The maximal correlation is between boardgames and strategygames (~.5)
 However, they still describe items in different dimensions

 'Rank:boardgame',
 'Rank:childrensgames',
 'Rank:strategygames',
 'Rank:thematic',
 'Rank:wargames',

These 4 are highly correlated, espcially NumWant and NumWish with correlation almost 1, also NumOwned and NumUserRatings
Drop  'NumWish', 'NumUserRatings',

'NumOwned',
'NumWant',
'NumWish',
'NumUserRatings',

The 3 features below are not really correlated with any other

'NumExpansions',
'NumImplementations',
'NumWeightVotes',

 The following features do not really have a strong correlation between each other

'BestPlayers',
'ComAgeRec',
'GameWeight',
'IsReimplementation',
'Kickstarted',
'MfgAgeRec',
'MinPlayers',
'ComMaxPlaytime',
'ComMinPlaytime',
'MaxPlayers',
'MfgAgeRec',
'MfgPlaytime',
'YearPublished'

No really big correlation between category features
'Cat:Childrens',
'Cat:Strategy',
'Cat:War',
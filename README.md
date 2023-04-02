# What is Data-Ex ?

DataEx is a decentralized data exchange where anyone from anywhere can monetise "any" kind of data in an encrypted and private manner. 

These data are further listed on our marketplace and is available for anyone to buy.





# How it's made ?

FVM wraps around every functionality of DataEx starting from storing uploaded files using DataDeals on Filecoin Virtual Machine to retrieving those files from miners.

Initially when a file is uploaded the data flow is :

1. Converting "anykind" of file to ".car" file.

2. Getting four essential information for deal proposal on FVM : 
    - File Size [Before Conversion to CAR, also known as Piece Size]
    - Car File Size
    - CID or Piece CID
    - CAR link

3. Using above informations we can call (makeDealProposal) function of DealClient contract.



 

# Why Data-Ex ?


Unlike traditional blockchain technology, which has limitations when it comes to storing and retrieving large amounts of data, Data-Ex provides a solution that enables users to securely and efficiently store and retrieve data of any size. 

This makes it an ideal platform for anyone looking to monetize their data or access valuable data from others.


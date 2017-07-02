import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  userData = [
    {
      'index': 0,
      'guid': '8f2a043f-a306-483c-ab1f-e57cac2351b9',
      'isActive': false,
      'balance': '$2,790.76',
      'picture': 'http://placehold.it/32x32',
      'age': 37,
      'eyeColor': 'blue',
      'name': 'Leonard Hampton',
      'gender': 'male',
      'company': 'FUTURITY'
    },
    {
      'index': 1,
      'guid': 'd727f0df-cce1-4f71-bb29-7b99a56a1c9b',
      'isActive': false,
      'balance': '$1,495.62',
      'picture': 'http://placehold.it/32x32',
      'age': 36,
      'eyeColor': 'green',
      'name': 'Aurora Saunders',
      'gender': 'female',
      'company': 'ASSURITY'
    },
    {
      'index': 2,
      'guid': '114a4c9c-548e-493e-9813-79a37e894236',
      'isActive': false,
      'balance': '$2,566.81',
      'picture': 'http://placehold.it/32x32',
      'age': 22,
      'eyeColor': 'brown',
      'name': 'Addie Colon',
      'gender': 'female',
      'company': 'COMDOM'
    },
    {
      'index': 3,
      'guid': '4e8dc012-11f4-4b4b-9457-4c2320a2cde0',
      'isActive': true,
      'balance': '$2,719.17',
      'picture': 'http://placehold.it/32x32',
      'age': 30,
      'eyeColor': 'green',
      'name': 'Marissa Smith',
      'gender': 'female',
      'company': 'MINGA'
    },
    {
      'index': 4,
      'guid': 'b9d25ca1-fc4e-42df-94c5-2b6bc55e6346',
      'isActive': false,
      'balance': '$3,085.38',
      'picture': 'http://placehold.it/32x32',
      'age': 26,
      'eyeColor': 'green',
      'name': 'Levine Miranda',
      'gender': 'male',
      'company': 'JUMPSTACK'
    },
    {
      'index': 5,
      'guid': '4cf50cc3-2e51-4434-bad6-9b84220c2943',
      'isActive': true,
      'balance': '$2,670.01',
      'picture': 'http://placehold.it/32x32',
      'age': 33,
      'eyeColor': 'blue',
      'name': 'Simpson Bush',
      'gender': 'male',
      'company': 'ZYTREK'
    },
    {
      'index': 6,
      'guid': 'ff43bf57-a41e-4037-b3b9-e36682496a86',
      'isActive': true,
      'balance': '$3,540.79',
      'picture': 'http://placehold.it/32x32',
      'age': 25,
      'eyeColor': 'blue',
      'name': 'Marshall Flores',
      'gender': 'male',
      'company': 'STOCKPOST'
    },
    {
      'index': 7,
      'guid': '5527bfc2-b2f6-44b2-b719-a2f34c609d7b',
      'isActive': true,
      'balance': '$3,881.71',
      'picture': 'http://placehold.it/32x32',
      'age': 38,
      'eyeColor': 'green',
      'name': 'Agnes Galloway',
      'gender': 'female',
      'company': 'QUONATA'
    },
    {
      'index': 8,
      'guid': 'a6c3471f-3e77-48ee-8c16-4028d6278553',
      'isActive': false,
      'balance': '$1,503.36',
      'picture': 'http://placehold.it/32x32',
      'age': 27,
      'eyeColor': 'blue',
      'name': 'Beatriz Butler',
      'gender': 'female',
      'company': 'ASSISTIA'
    },
    {
      'index': 9,
      'guid': 'd595b20b-f373-4dc3-9ed5-e5813306babe',
      'isActive': false,
      'balance': '$3,817.99',
      'picture': 'http://placehold.it/32x32',
      'age': 35,
      'eyeColor': 'blue',
      'name': 'Tommie Stark',
      'gender': 'female',
      'company': 'ZILLANET'
    },
    {
      'index': 10,
      'guid': '934ce1fb-aaff-4f9c-b7f2-1d70b5a6fdb6',
      'isActive': false,
      'balance': '$3,539.84',
      'picture': 'http://placehold.it/32x32',
      'age': 38,
      'eyeColor': 'green',
      'name': 'Ellison Gill',
      'gender': 'male',
      'company': 'NETBOOK'
    },
    {
      'index': 11,
      'guid': '8531405e-a78d-43c8-9494-3c38690f2674',
      'isActive': false,
      'balance': '$2,077.44',
      'picture': 'http://placehold.it/32x32',
      'age': 20,
      'eyeColor': 'green',
      'name': 'Ware Vazquez',
      'gender': 'male',
      'company': 'ZOLAREX'
    },
    {
      'index': 12,
      'guid': '864f6386-4138-449a-821e-bbd65e2db5ea',
      'isActive': false,
      'balance': '$3,019.02',
      'picture': 'http://placehold.it/32x32',
      'age': 22,
      'eyeColor': 'green',
      'name': 'Willis Skinner',
      'gender': 'male',
      'company': 'ESCHOIR'
    },
    {
      'index': 13,
      'guid': '73044b8c-7fa9-453c-87af-7a751c78d9f6',
      'isActive': false,
      'balance': '$3,080.44',
      'picture': 'http://placehold.it/32x32',
      'age': 36,
      'eyeColor': 'brown',
      'name': 'Vanessa Bean',
      'gender': 'female',
      'company': 'CENTICE'
    },
    {
      'index': 14,
      'guid': '6d08763c-857f-4b23-b752-9e74e058d738',
      'isActive': true,
      'balance': '$2,785.46',
      'picture': 'http://placehold.it/32x32',
      'age': 30,
      'eyeColor': 'brown',
      'name': 'Solis Ramirez',
      'gender': 'male',
      'company': 'GLUID'
    },
    {
      'index': 15,
      'guid': 'ebc75595-4b62-417b-9a6e-2a08de2f3a5f',
      'isActive': true,
      'balance': '$3,572.33',
      'picture': 'http://placehold.it/32x32',
      'age': 38,
      'eyeColor': 'brown',
      'name': 'Angelina Dorsey',
      'gender': 'female',
      'company': 'COSMOSIS'
    },
    {
      'index': 16,
      'guid': '00182d24-f745-410f-9bf4-2c44f3216aef',
      'isActive': false,
      'balance': '$1,973.61',
      'picture': 'http://placehold.it/32x32',
      'age': 39,
      'eyeColor': 'green',
      'name': 'Teri Giles',
      'gender': 'female',
      'company': 'ZOLAVO'
    },
    {
      'index': 17,
      'guid': '342c0c25-6995-401a-b018-ac98cb82eb31',
      'isActive': true,
      'balance': '$1,579.57',
      'picture': 'http://placehold.it/32x32',
      'age': 27,
      'eyeColor': 'brown',
      'name': 'Joanna Bird',
      'gender': 'female',
      'company': 'LETPRO'
    },
    {
      'index': 18,
      'guid': '724d01fa-d6ed-4266-97ab-708d52f61932',
      'isActive': true,
      'balance': '$3,817.01',
      'picture': 'http://placehold.it/32x32',
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Charity Hopkins',
      'gender': 'female',
      'company': 'CALCULA'
    },
    {
      'index': 19,
      'guid': '896815b0-cabb-4d06-b65d-057b050be662',
      'isActive': false,
      'balance': '$2,817.50',
      'picture': 'http://placehold.it/32x32',
      'age': 37,
      'eyeColor': 'blue',
      'name': 'Jennie Michael',
      'gender': 'female',
      'company': 'GEOFORMA'
    },
    {
      'index': 20,
      'guid': '842dd7be-de5e-46a9-a0b7-ff53aaf1bd2c',
      'isActive': false,
      'balance': '$3,782.89',
      'picture': 'http://placehold.it/32x32',
      'age': 32,
      'eyeColor': 'blue',
      'name': 'Best Griffin',
      'gender': 'male',
      'company': 'MAROPTIC'
    },
    {
      'index': 21,
      'guid': 'a31b6979-42b7-4350-8618-275d2f0bf28c',
      'isActive': false,
      'balance': '$3,583.40',
      'picture': 'http://placehold.it/32x32',
      'age': 37,
      'eyeColor': 'green',
      'name': 'Stanton Prince',
      'gender': 'male',
      'company': 'APPLIDEC'
    },
    {
      'index': 22,
      'guid': '9ad9b42c-1da8-493d-b072-4e0dded4d2b3',
      'isActive': false,
      'balance': '$2,101.54',
      'picture': 'http://placehold.it/32x32',
      'age': 25,
      'eyeColor': 'green',
      'name': 'Clements Frank',
      'gender': 'male',
      'company': 'GEEKETRON'
    },
    {
      'index': 23,
      'guid': 'd92ac492-029e-414e-b5f7-4cdc931bb0ab',
      'isActive': true,
      'balance': '$1,521.46',
      'picture': 'http://placehold.it/32x32',
      'age': 32,
      'eyeColor': 'green',
      'name': 'Rice Kaufman',
      'gender': 'male',
      'company': 'ISOTRONIC'
    },
    {
      'index': 24,
      'guid': 'dde72dc5-0ecc-4496-bbcc-3641670e45fe',
      'isActive': true,
      'balance': '$3,094.04',
      'picture': 'http://placehold.it/32x32',
      'age': 29,
      'eyeColor': 'green',
      'name': 'Walker Coffey',
      'gender': 'male',
      'company': 'LUDAK'
    },
    {
      'index': 25,
      'guid': '04f3281c-596d-4f40-9904-5acbba5617a3',
      'isActive': false,
      'balance': '$1,526.97',
      'picture': 'http://placehold.it/32x32',
      'age': 38,
      'eyeColor': 'blue',
      'name': 'Cleveland Huber',
      'gender': 'male',
      'company': 'ZINCA'
    },
    {
      'index': 26,
      'guid': '22ac2ee1-def2-4a74-988f-ae277ab532bb',
      'isActive': true,
      'balance': '$3,227.04',
      'picture': 'http://placehold.it/32x32',
      'age': 26,
      'eyeColor': 'green',
      'name': 'Kasey Padilla',
      'gender': 'female',
      'company': 'MEMORA'
    },
    {
      'index': 27,
      'guid': '50cc82a3-8c7c-4540-a683-7ea4b239f88a',
      'isActive': false,
      'balance': '$2,656.16',
      'picture': 'http://placehold.it/32x32',
      'age': 21,
      'eyeColor': 'blue',
      'name': 'Christina Freeman',
      'gender': 'female',
      'company': 'LUNCHPOD'
    },
    {
      'index': 28,
      'guid': 'a0bbba25-d893-4485-9be3-a69ffddd3e5c',
      'isActive': false,
      'balance': '$2,655.08',
      'picture': 'http://placehold.it/32x32',
      'age': 21,
      'eyeColor': 'green',
      'name': 'Earnestine Mclean',
      'gender': 'female',
      'company': 'ONTAGENE'
    },
    {
      'index': 29,
      'guid': '4c572d5c-d60d-4f06-b3f3-804912fbfb45',
      'isActive': true,
      'balance': '$3,814.77',
      'picture': 'http://placehold.it/32x32',
      'age': 21,
      'eyeColor': 'green',
      'name': 'Manuela Mckay',
      'gender': 'female',
      'company': 'CUBIX'
    },
    {
      'index': 30,
      'guid': 'cc9e0ae4-a1c6-4d4c-ac02-9d91a6637252',
      'isActive': true,
      'balance': '$2,005.46',
      'picture': 'http://placehold.it/32x32',
      'age': 20,
      'eyeColor': 'blue',
      'name': 'Jenkins Mosley',
      'gender': 'male',
      'company': 'ARTWORLDS'
    },
    {
      'index': 31,
      'guid': 'b895b490-0d85-47b4-8f08-c9bb67359a4b',
      'isActive': true,
      'balance': '$2,114.90',
      'picture': 'http://placehold.it/32x32',
      'age': 33,
      'eyeColor': 'green',
      'name': 'Millicent Rogers',
      'gender': 'female',
      'company': 'ENDICIL'
    },
    {
      'index': 32,
      'guid': '69271595-cb2a-41b8-a5c4-cb999f4ac4ad',
      'isActive': false,
      'balance': '$3,656.83',
      'picture': 'http://placehold.it/32x32',
      'age': 33,
      'eyeColor': 'green',
      'name': 'Effie Armstrong',
      'gender': 'female',
      'company': 'ECRATIC'
    },
    {
      'index': 33,
      'guid': 'a5b08ad3-d2ea-4e01-af7b-761aba39bafe',
      'isActive': true,
      'balance': '$1,292.25',
      'picture': 'http://placehold.it/32x32',
      'age': 35,
      'eyeColor': 'green',
      'name': 'Higgins Brooks',
      'gender': 'male',
      'company': 'SOPRANO'
    },
    {
      'index': 34,
      'guid': '852610fe-d763-44eb-8bc9-358f1fabe15a',
      'isActive': true,
      'balance': '$2,514.93',
      'picture': 'http://placehold.it/32x32',
      'age': 35,
      'eyeColor': 'green',
      'name': 'Greta Estrada',
      'gender': 'female',
      'company': 'TALAE'
    },
    {
      'index': 35,
      'guid': '624c488d-98d8-4b6f-b680-ec1b8542ba51',
      'isActive': true,
      'balance': '$1,000.64',
      'picture': 'http://placehold.it/32x32',
      'age': 34,
      'eyeColor': 'blue',
      'name': 'Graham Munoz',
      'gender': 'male',
      'company': 'MICROLUXE'
    },
    {
      'index': 36,
      'guid': '49236250-a877-4c1f-8986-05dee27426d4',
      'isActive': true,
      'balance': '$3,494.85',
      'picture': 'http://placehold.it/32x32',
      'age': 28,
      'eyeColor': 'brown',
      'name': 'Kerri Henderson',
      'gender': 'female',
      'company': 'MOLTONIC'
    },
    {
      'index': 37,
      'guid': 'c3b783e4-eb25-4e36-bb5a-bde38f489113',
      'isActive': false,
      'balance': '$1,546.01',
      'picture': 'http://placehold.it/32x32',
      'age': 24,
      'eyeColor': 'green',
      'name': 'Hubbard Whitfield',
      'gender': 'male',
      'company': 'TETRATREX'
    },
    {
      'index': 38,
      'guid': 'e1009547-fed5-4fe5-b90a-a58d1ef2c2ce',
      'isActive': true,
      'balance': '$3,372.21',
      'picture': 'http://placehold.it/32x32',
      'age': 37,
      'eyeColor': 'blue',
      'name': 'Oliver Mccoy',
      'gender': 'male',
      'company': 'INTRADISK'
    },
    {
      'index': 39,
      'guid': '56e82e1a-2d8c-4b65-8fd7-f23b20e1b2d4',
      'isActive': false,
      'balance': '$1,556.69',
      'picture': 'http://placehold.it/32x32',
      'age': 40,
      'eyeColor': 'blue',
      'name': 'Marcella Kim',
      'gender': 'female',
      'company': 'SENSATE'
    }
  ];
  constructor() {

  }

}

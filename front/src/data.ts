export interface Polluant {
    baseline: number | null,
    one_traffic_unit: number | null
    one_flight: number | null
}

export interface PolluantsList { 
    SO2: Polluant, 
    NO: Polluant, 
    NO2: Polluant, 
    NOx: Polluant, 
    PM10: Polluant, 
   // PM25: Polluant,
    "PM2.5": Polluant,
    PM1: Polluant
}

export interface DataInterface extends PolluantsList {
    date: string;
    number_of_planes: number;
    car_coef: number;
}


export const data: DataInterface[] = [
    {
      "date": "2020-02-03",
      "SO2": {
        "one_flight": 0.0014454909747192027,
        "one_traffic_unit": 2.085223980387787,
        "baseline": 2.432761310452418
      },
      "NO": {
        "one_flight": 0.005530480193189314,
        "one_traffic_unit": 7.978112712975099,
        "baseline": 9.307798165137616
      },
      "NO2": {
        "one_flight": 0.01938961480245884,
        "one_traffic_unit": 27.970904325032766,
        "baseline": 32.63272171253823
      },
      "NOx": {
        "one_flight": 0.027876353024761016,
        "one_traffic_unit": 40.21363040629096,
        "baseline": 46.91590214067279
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1683.0,
      "car_coef": 1.1666666666666667
    },
    {
      "date": "2020-02-10",
      "SO2": {
        "one_flight": 0.0032935672251541486,
        "one_traffic_unit": -2.4914569301666076,
        "baseline": 5.39815668202765
      },
      "NO": {
        "one_flight": 0.007238396182601332,
        "one_traffic_unit": -5.4755683122847305,
        "baseline": 11.863731343283582
      },
      "NO2": {
        "one_flight": 0.019633194612659704,
        "one_traffic_unit": -14.85175660160735,
        "baseline": 32.178805970149256
      },
      "NOx": {
        "one_flight": 0.030736798011164433,
        "one_traffic_unit": -23.251205510907006,
        "baseline": 50.37761194029851
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1639.0,
      "car_coef": -2.1666666666666665
    },
    {
      "date": "2020-02-17",
      "SO2": {
        "one_flight": 0.0019357099062801086,
        "one_traffic_unit": null,
        "baseline": 3.157142857142857
      },
      "NO": {
        "one_flight": 0.008456661171831689,
        "one_traffic_unit": null,
        "baseline": 13.792814371257483
      },
      "NO2": {
        "one_flight": 0.022814518112762822,
        "one_traffic_unit": null,
        "baseline": 37.210479041916166
      },
      "NOx": {
        "one_flight": 0.03578661193859981,
        "one_traffic_unit": null,
        "baseline": 58.36796407185629
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1631.0,
      "car_coef": 0.0
    },
    {
      "date": "2020-02-24",
      "SO2": {
        "one_flight": 0.002470761303326587,
        "one_traffic_unit": -2.8818959842001317,
        "baseline": 4.202764976958525
      },
      "NO": {
        "one_flight": 0.006985706388691463,
        "one_traffic_unit": -8.148127931769723,
        "baseline": 11.882686567164178
      },
      "NO2": {
        "one_flight": 0.01951600024568515,
        "one_traffic_unit": -22.763462686567163,
        "baseline": 33.196716417910444
      },
      "NOx": {
        "one_flight": 0.030233927364938972,
        "one_traffic_unit": -35.26485287846482,
        "baseline": 51.42791044776119
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1701.0,
      "car_coef": -1.4583333333333333
    },
    {
      "date": "2020-03-02",
      "SO2": {
        "one_flight": 0.002368532085458939,
        "one_traffic_unit": 0.8242491657397107,
        "baseline": 3.983870967741935
      },
      "NO": {
        "one_flight": 0.003830461249046089,
        "one_traffic_unit": 1.333000514668039,
        "baseline": 6.442835820895522
      },
      "NO2": {
        "one_flight": 0.014706816689442206,
        "one_traffic_unit": 5.117972207925888,
        "baseline": 24.73686567164179
      },
      "NOx": {
        "one_flight": 0.02058823007436066,
        "one_traffic_unit": 7.164704065877509,
        "baseline": 34.62940298507463
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1682.0,
      "car_coef": 4.833333333333333
    },
    {
      "date": "2020-03-09",
      "SO2": {
        "one_flight": 0.0015478657104296277,
        "one_traffic_unit": -0.22514812376563528,
        "baseline": 2.6267281105990783
      },
      "NO": {
        "one_flight": 0.004411095310851485,
        "one_traffic_unit": -0.6416253207869974,
        "baseline": 7.48562874251497
      },
      "NO2": {
        "one_flight": 0.014733291225445398,
        "one_traffic_unit": -2.1430624465355006,
        "baseline": 25.00239520958084
      },
      "NOx": {
        "one_flight": 0.021508103416031817,
        "one_traffic_unit": -3.1285072711719426,
        "baseline": 36.49925149700599
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1697.0,
      "car_coef": -11.666666666666666
    },
    {
      "date": "2020-03-16",
      "SO2": {
        "one_flight": 0.0022984896447737295,
        "one_traffic_unit": -0.06607481702358364,
        "baseline": 3.7442396313364057
      },
      "NO": {
        "one_flight": 0.0027679283142299552,
        "one_traffic_unit": -0.07956979806848113,
        "baseline": 4.508955223880597
      },
      "NO2": {
        "one_flight": 0.014800124607166745,
        "one_traffic_unit": -0.42546005267778764,
        "baseline": 24.109402985074627
      },
      "NOx": {
        "one_flight": 0.01905252741815783,
        "one_traffic_unit": -0.5477041264266902,
        "baseline": 31.036567164179104
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1629.0,
      "car_coef": -56.66666666666666
    },
    {
      "date": "2020-03-23",
      "SO2": {
        "one_flight": 0.0030305005833370685,
        "one_traffic_unit": -0.047825527810524064,
        "baseline": 3.4274961597542246
      },
      "NO": {
        "one_flight": 0.001670928699629918,
        "one_traffic_unit": -0.02636958640857819,
        "baseline": 1.889820359281437
      },
      "NO2": {
        "one_flight": 0.015726239828036233,
        "one_traffic_unit": -0.24818200807686946,
        "baseline": 17.78637724550898
      },
      "NOx": {
        "one_flight": 0.018301063655182997,
        "one_traffic_unit": -0.28881632084667863,
        "baseline": 20.69850299401197
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1131.0,
      "car_coef": -71.66666666666667
    },
    {
      "date": "2020-03-30",
      "SO2": {
        "one_flight": 0.011470823805267618,
        "one_traffic_unit": -0.064632767129858,
        "baseline": 4.553917050691244
      },
      "NO": {
        "one_flight": 0.004506184443024174,
        "one_traffic_unit": -0.025390257464893155,
        "baseline": 1.7889552238805968
      },
      "NO2": {
        "one_flight": 0.0441114327606301,
        "one_traffic_unit": -0.2485474460930122,
        "baseline": 17.51223880597015
      },
      "NOx": {
        "one_flight": 0.05103612917778864,
        "one_traffic_unit": -0.2875648958048316,
        "baseline": 20.26134328358209
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 397.0,
      "car_coef": -70.45833333333333
    },
    {
      "date": "2020-04-06",
      "SO2": {
        "one_flight": 0.031885117570601446,
        "one_traffic_unit": -0.09652547417370674,
        "baseline": 6.6321044546851
      },
      "NO": {
        "one_flight": 0.014471153846153845,
        "one_traffic_unit": -0.043808368708308065,
        "baseline": 3.01
      },
      "NO2": {
        "one_flight": 0.11403846153846153,
        "one_traffic_unit": -0.34522741055184963,
        "baseline": 23.72
      },
      "NOx": {
        "one_flight": 0.13626004592422503,
        "one_traffic_unit": -0.4124985744413168,
        "baseline": 28.342089552238807
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 208.0,
      "car_coef": -68.70833333333333
    },
    {
      "date": "2020-04-13",
      "SO2": {
        "one_flight": 0.02104746349335978,
        "one_traffic_unit": -0.05025943423603292,
        "baseline": 3.325499231950845
      },
      "NO": {
        "one_flight": 0.009789282195103464,
        "one_traffic_unit": -0.023375918188811295,
        "baseline": 1.5467065868263474
      },
      "NO2": {
        "one_flight": 0.09941540968695521,
        "one_traffic_unit": -0.23739498333308195,
        "baseline": 15.707634730538924
      },
      "NOx": {
        "one_flight": 0.11448684908663684,
        "one_traffic_unit": -0.2733842139398784,
        "baseline": 18.08892215568862
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 158.0,
      "car_coef": -66.16666666666667
    },
    {
      "date": "2020-04-20",
      "SO2": {
        "one_flight": 0.01133680976635136,
        "one_traffic_unit": -0.026698955472982417,
        "baseline": 1.723195084485407
      },
      "NO": {
        "one_flight": 0.029162411626080124,
        "one_traffic_unit": -0.0686794561729763,
        "baseline": 4.432686567164179
      },
      "NO2": {
        "one_flight": 0.14688138256087982,
        "one_traffic_unit": -0.34591561238353097,
        "baseline": 22.32597014925373
      },
      "NOx": {
        "one_flight": 0.1916899057344855,
        "one_traffic_unit": -0.45144272183305556,
        "baseline": 29.136865671641797
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 152.0,
      "car_coef": -64.54166666666667
    },
    {
      "date": "2020-04-27",
      "SO2": {
        "one_flight": 0.011319179918844284,
        "one_traffic_unit": -0.03422959579245555,
        "baseline": 1.9582181259600613
      },
      "NO": {
        "one_flight": 0.013312969436848844,
        "one_traffic_unit": -0.040258884997666715,
        "baseline": 2.30314371257485
      },
      "NO2": {
        "one_flight": 0.0705124433214496,
        "one_traffic_unit": -0.21323209371497356,
        "baseline": 12.19865269461078
      },
      "NOx": {
        "one_flight": 0.09088903118618255,
        "one_traffic_unit": -0.2748516077822505,
        "baseline": 15.723802395209582
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.025722543352601157,
        "one_traffic_unit": -0.07778587035688274,
        "baseline": 4.45
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 173.0,
      "car_coef": -57.208333333333336
    },
    {
      "date": "2020-05-04",
      "SO2": {
        "one_flight": 0.018733084631702146,
        "one_traffic_unit": -0.06180998137072264,
        "baseline": 3.1471582181259605
      },
      "NO": {
        "one_flight": 0.019146233120113716,
        "one_traffic_unit": -0.0631731685272492,
        "baseline": 3.2165671641791045
      },
      "NO2": {
        "one_flight": 0.09464374555792467,
        "one_traffic_unit": -0.3122778904169823,
        "baseline": 15.900149253731344
      },
      "NOx": {
        "one_flight": 0.1240813788201848,
        "one_traffic_unit": -0.4094076263526884,
        "baseline": 20.845671641791046
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.0548434856175973,
        "one_traffic_unit": -0.18095657447639307,
        "baseline": 9.213705583756346
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 168.0,
      "car_coef": -50.91666666666666
    },
    {
      "date": "2020-05-11",
      "SO2": {
        "one_flight": 0.013479761406028686,
        "one_traffic_unit": -0.08127438524744213,
        "baseline": 2.0758832565284178
      },
      "NO": {
        "one_flight": 0.024056018608257415,
        "one_traffic_unit": -0.1450424873998685,
        "baseline": 3.7046268656716417
      },
      "NO2": {
        "one_flight": 0.12113297150610583,
        "one_traffic_unit": -0.7303547515278419,
        "baseline": 18.654477611940298
      },
      "NOx": {
        "one_flight": 0.15809362279511532,
        "one_traffic_unit": -0.9532039638674489,
        "baseline": 24.34641791044776
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.061248647186147184,
        "one_traffic_unit": -0.3692903752039151,
        "baseline": 9.432291666666666
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 154.0,
      "car_coef": -25.541666666666668
    },
    {
      "date": "2020-05-18",
      "SO2": {
        "one_flight": 0.014147688060731538,
        "one_traffic_unit": -0.13261455525606472,
        "baseline": 2.9285714285714284
      },
      "NO": {
        "one_flight": 0.022125314588214876,
        "one_traffic_unit": -0.20739351485707835,
        "baseline": 4.579940119760479
      },
      "NO2": {
        "one_flight": 0.12990179062165524,
        "one_traffic_unit": -1.2176454637894027,
        "baseline": 26.889670658682636
      },
      "NOx": {
        "one_flight": 0.16388961208018746,
        "one_traffic_unit": -1.53623319398938,
        "baseline": 33.9251497005988
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.05613063033700541,
        "one_traffic_unit": -0.5261452292721565,
        "baseline": 11.61904047976012
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 207.0,
      "car_coef": -22.08333333333333
    },
    {
      "date": "2020-05-25",
      "SO2": {
        "one_flight": 0.01340375222216469,
        "one_traffic_unit": -0.50228797800954,
        "baseline": 2.385867895545315
      },
      "NO": {
        "one_flight": 0.02531360053664263,
        "one_traffic_unit": -0.9485938727415555,
        "baseline": 4.505820895522389
      },
      "NO2": {
        "one_flight": 0.13429146402817377,
        "one_traffic_unit": -5.032395915161038,
        "baseline": 23.90388059701493
      },
      "NOx": {
        "one_flight": 0.17321482475264124,
        "one_traffic_unit": -6.490997643362135,
        "baseline": 30.832238805970142
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.05498261102193685,
        "one_traffic_unit": -2.060401002506265,
        "baseline": 9.78690476190476
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 178.0,
      "car_coef": -4.75
    },
    {
      "date": "2020-06-01",
      "SO2": {
        "one_flight": 0.00813103467193329,
        "one_traffic_unit": -0.11594812306714421,
        "baseline": 1.821351766513057
      },
      "NO": {
        "one_flight": 0.02258941937553464,
        "one_traffic_unit": -0.32212392191743827,
        "baseline": 5.06002994011976
      },
      "NO2": {
        "one_flight": 0.09537732570573142,
        "one_traffic_unit": -1.3600756047586526,
        "baseline": 21.364520958083837
      },
      "NOx": {
        "one_flight": 0.13008714713430283,
        "one_traffic_unit": -1.8550358169602439,
        "baseline": 29.139520958083832
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.038096566751700686,
        "one_traffic_unit": -0.5432550208412278,
        "baseline": 8.533630952380953
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 224.0,
      "car_coef": -15.708333333333334
    },
    {
      "date": "2020-06-08",
      "SO2": {
        "one_flight": 0.008519838854592354,
        "one_traffic_unit": -0.7853068857276431,
        "baseline": 2.257757296466974
      },
      "NO": {
        "one_flight": 0.019124190368910166,
        "one_traffic_unit": -1.76275146009085,
        "baseline": 5.067910447761194
      },
      "NO2": {
        "one_flight": 0.08619656434807096,
        "one_traffic_unit": -7.945074626865672,
        "baseline": 22.842089552238807
      },
      "NOx": {
        "one_flight": 0.11557138834131231,
        "one_traffic_unit": -10.652667099286178,
        "baseline": 30.626417910447763
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.0347197888589398,
        "one_traffic_unit": -3.2002587991718427,
        "baseline": 9.200744047619049
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 265.0,
      "car_coef": -2.875
    },
    {
      "date": "2020-06-15",
      "SO2": {
        "one_flight": 0.00419941284805164,
        "one_traffic_unit": 0.39181937404742495,
        "baseline": 1.4529968454258675
      },
      "NO": {
        "one_flight": 0.031714627761746085,
        "one_traffic_unit": 2.9590816734105556,
        "baseline": 10.973261205564144
      },
      "NO2": {
        "one_flight": 0.08439083006495073,
        "one_traffic_unit": 7.873948908532031,
        "baseline": 29.19922720247295
      },
      "NOx": {
        "one_flight": 0.1330306170765918,
        "one_traffic_unit": 12.412204991056386,
        "baseline": 46.02859350850077
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.02336980982217712,
        "one_traffic_unit": 2.180482031048975,
        "baseline": 8.085954198473283
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 346.0,
      "car_coef": 3.7083333333333335
    },
    {
      "date": "2020-06-22",
      "SO2": {
        "one_flight": 0.0049332843677316685,
        "one_traffic_unit": 0.2132275132275132,
        "baseline": 1.919047619047619
      },
      "NO": {
        "one_flight": 0.021467597743928174,
        "one_traffic_unit": 0.9278772802653399,
        "baseline": 8.35089552238806
      },
      "NO2": {
        "one_flight": 0.08138395426466638,
        "one_traffic_unit": 3.51759535655058,
        "baseline": 31.65835820895522
      },
      "NOx": {
        "one_flight": 0.11429114069754057,
        "one_traffic_unit": 4.939917081260365,
        "baseline": 44.45925373134328
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.029176612804504832,
        "one_traffic_unit": 1.261078042328042,
        "baseline": 11.34970238095238
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 389.0,
      "car_coef": 9.0
    },
    {
      "date": "2020-06-29",
      "SO2": {
        "one_flight": 0.00266752556034554,
        "one_traffic_unit": 0.08886443359240664,
        "baseline": 1.240399385560676
      },
      "NO": {
        "one_flight": 0.017423540016740714,
        "one_traffic_unit": 0.5804379301099294,
        "baseline": 8.101946107784432
      },
      "NO2": {
        "one_flight": 0.06098287296374993,
        "one_traffic_unit": 2.0315488426132813,
        "baseline": 28.357035928143716
      },
      "NOx": {
        "one_flight": 0.08770523469190651,
        "one_traffic_unit": 2.921762445258736,
        "baseline": 40.782934131736525
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.019410522273425494,
        "one_traffic_unit": 0.6466311300639657,
        "baseline": 9.025892857142855
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 465.0,
      "car_coef": 13.958333333333334
    },
    {
      "date": "2020-07-06",
      "SO2": {
        "one_flight": 0.0023932307177863465,
        "one_traffic_unit": 0.08772278412831407,
        "baseline": 1.4072196620583717
      },
      "NO": {
        "one_flight": 0.016518239032139802,
        "one_traffic_unit": 0.6054685434326152,
        "baseline": 9.712724550898203
      },
      "NO2": {
        "one_flight": 0.06221765652368733,
        "one_traffic_unit": 2.2805599191227937,
        "baseline": 36.58398203592815
      },
      "NOx": {
        "one_flight": 0.08754378997107826,
        "one_traffic_unit": 3.208877828758068,
        "baseline": 51.475748502994016
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.02077790937803693,
        "one_traffic_unit": 0.7616048237476808,
        "baseline": 12.217410714285714
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 588.0,
      "car_coef": 16.041666666666668
    },
    {
      "date": "2020-07-13",
      "SO2": {
        "one_flight": 0.0010326044513861773,
        "one_traffic_unit": 0.040017654476670876,
        "baseline": 0.8136923076923076
      },
      "NO": {
        "one_flight": 0.01157781521021602,
        "one_traffic_unit": 0.44868778945820786,
        "baseline": 9.123318385650224
      },
      "NO2": {
        "one_flight": 0.04070967350314508,
        "one_traffic_unit": 1.5776666911710657,
        "baseline": 32.07922272047833
      },
      "NOx": {
        "one_flight": 0.058459288429582756,
        "one_traffic_unit": 2.2655370138939945,
        "baseline": 46.06591928251121
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.016369801871591004,
        "one_traffic_unit": 0.6343969118760843,
        "baseline": 12.89940387481371
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 788.0,
      "car_coef": 20.33333333333333
    },
    {
      "date": "2020-07-20",
      "SO2": {
        "one_flight": 0.00108359133126935,
        "one_traffic_unit": null,
        "baseline": 0.8831269349845201
      },
      "NO": {
        "one_flight": 0.010095801322795186,
        "one_traffic_unit": null,
        "baseline": 8.228078078078077
      },
      "NO2": {
        "one_flight": 0.04056449087123934,
        "one_traffic_unit": null,
        "baseline": 33.06006006006006
      },
      "NOx": {
        "one_flight": 0.05604451076843714,
        "one_traffic_unit": null,
        "baseline": 45.67627627627627
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.015145340344726846,
        "one_traffic_unit": null,
        "baseline": 12.34345238095238
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 815.0,
      "car_coef": 0.0
    },
    {
      "date": "2020-07-27",
      "SO2": {
        "one_flight": 0.0010452827950499094,
        "one_traffic_unit": 0.03596584685103765,
        "baseline": 0.9261205564142196
      },
      "NO": {
        "one_flight": 0.009885535369468845,
        "one_traffic_unit": 0.34013919756696687,
        "baseline": 8.758584337349397
      },
      "NO2": {
        "one_flight": 0.041778740243139594,
        "one_traffic_unit": 1.4375131594338517,
        "baseline": 37.01596385542168
      },
      "NOx": {
        "one_flight": 0.05693230030732411,
        "one_traffic_unit": 1.9589133231956954,
        "baseline": 50.44201807228916
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.016523461157297803,
        "one_traffic_unit": 0.5685354013734313,
        "baseline": 14.639786585365854
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 886.0,
      "car_coef": 25.75
    },
    {
      "date": "2020-08-03",
      "SO2": {
        "one_flight": 0.001982019106583781,
        "one_traffic_unit": 0.08672023160575718,
        "baseline": 1.8175115207373271
      },
      "NO": {
        "one_flight": 0.01099969075017497,
        "one_traffic_unit": 0.4812747396219698,
        "baseline": 10.086716417910448
      },
      "NO2": {
        "one_flight": 0.04323979882485066,
        "one_traffic_unit": 1.8918916352630488,
        "baseline": 39.650895522388055
      },
      "NOx": {
        "one_flight": 0.06010123862693077,
        "one_traffic_unit": 2.6296382896649955,
        "baseline": 55.11283582089552
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01325226154643507,
        "one_traffic_unit": 0.5798325489342805,
        "baseline": 12.15232383808096
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 917.0,
      "car_coef": 20.95833333333333
    },
    {
      "date": "2020-08-10",
      "SO2": {
        "one_flight": 0.000730601982407471,
        "one_traffic_unit": 0.03757381623809851,
        "baseline": 0.7342549923195084
      },
      "NO": {
        "one_flight": 0.006967557422468496,
        "one_traffic_unit": 0.35833152458409406,
        "baseline": 7.002395209580839
      },
      "NO2": {
        "one_flight": 0.032253701552119644,
        "one_traffic_unit": 1.65876179410901,
        "baseline": 32.41497005988024
      },
      "NOx": {
        "one_flight": 0.04293115262013287,
        "one_traffic_unit": 2.2078878490354046,
        "baseline": 43.145808383233536
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.013752813314380479,
        "one_traffic_unit": 0.7072875418824246,
        "baseline": 13.821577380952382
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1005.0,
      "car_coef": 19.541666666666668
    },
    {
      "date": "2020-08-17",
      "SO2": {
        "one_flight": 0.0014958048224177256,
        "one_traffic_unit": 0.11084700999811356,
        "baseline": 1.5795698924731183
      },
      "NO": {
        "one_flight": 0.0060027985074626875,
        "one_traffic_unit": 0.44483896307934023,
        "baseline": 6.338955223880598
      },
      "NO2": {
        "one_flight": 0.026589919719583903,
        "one_traffic_unit": 1.9704529981670598,
        "baseline": 28.0789552238806
      },
      "NOx": {
        "one_flight": 0.03578951831750339,
        "one_traffic_unit": 2.652191673212883,
        "baseline": 37.79373134328358
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.008913154688002942,
        "one_traffic_unit": 0.6605116737214812,
        "baseline": 9.412291350531108
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1056.0,
      "car_coef": 14.25
    },
    {
      "date": "2020-08-24",
      "SO2": {
        "one_flight": 0.002250465648219631,
        "one_traffic_unit": 0.3077511773940345,
        "baseline": 2.462009419152276
      },
      "NO": {
        "one_flight": 0.00910028938405061,
        "one_traffic_unit": 1.244464573268921,
        "baseline": 9.955716586151368
      },
      "NO2": {
        "one_flight": 0.030531047699794225,
        "one_traffic_unit": 4.17512077294686,
        "baseline": 33.40096618357488
      },
      "NOx": {
        "one_flight": 0.044477268779788456,
        "one_traffic_unit": 6.082266505636071,
        "baseline": 48.65813204508857
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.008315361963458822,
        "one_traffic_unit": 1.137125748502994,
        "baseline": 9.097005988023952
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1094.0,
      "car_coef": 8.0
    },
    {
      "date": "2020-08-31",
      "SO2": {
        "one_flight": 0.0014180172837184029,
        "one_traffic_unit": 13.340706605222733,
        "baseline": 1.6675883256528417
      },
      "NO": {
        "one_flight": 0.006704025454025454,
        "one_traffic_unit": 63.07147147147147,
        "baseline": 7.883933933933934
      },
      "NO2": {
        "one_flight": 0.027615242793814224,
        "one_traffic_unit": 259.8042042042042,
        "baseline": 32.475525525525526
      },
      "NOx": {
        "one_flight": 0.03788839860268432,
        "one_traffic_unit": 356.4540540540541,
        "baseline": 44.55675675675676
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.008957130507270986,
        "one_traffic_unit": 84.26868381240544,
        "baseline": 10.53358547655068
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1176.0,
      "car_coef": 0.125
    },
    {
      "date": "2020-09-07",
      "SO2": {
        "one_flight": 0.0012935767005018263,
        "one_traffic_unit": -1.8611981566820277,
        "baseline": 1.5509984639016898
      },
      "NO": {
        "one_flight": 0.00781111124942427,
        "one_traffic_unit": -11.23862686567164,
        "baseline": 9.3655223880597
      },
      "NO2": {
        "one_flight": 0.0321184320266889,
        "one_traffic_unit": -46.211999999999996,
        "baseline": 38.51
      },
      "NOx": {
        "one_flight": 0.044093958896095006,
        "one_traffic_unit": -63.442388059701486,
        "baseline": 52.86865671641791
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.012243337702053297,
        "one_traffic_unit": -17.615714285714283,
        "baseline": 14.679761904761904
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1199.0,
      "car_coef": -0.8333333333333334
    },
    {
      "date": "2020-09-14",
      "SO2": {
        "one_flight": 0.0005251436437952791,
        "one_traffic_unit": -7.284792626728113,
        "baseline": 0.6070660522273426
      },
      "NO": {
        "one_flight": 0.005634362762364544,
        "one_traffic_unit": -78.15988023952099,
        "baseline": 6.513323353293413
      },
      "NO2": {
        "one_flight": 0.02785868574270145,
        "one_traffic_unit": -386.4556886227547,
        "baseline": 32.20464071856288
      },
      "NOx": {
        "one_flight": 0.036491592938690094,
        "one_traffic_unit": -506.21137724550914,
        "baseline": 42.18428143712575
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.016404833992420497,
        "one_traffic_unit": -227.5678571428572,
        "baseline": 18.963988095238093
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1156.0,
      "car_coef": -0.0833333333333333
    },
    {
      "date": "2020-09-21",
      "SO2": {
        "one_flight": 0.0009175333864160503,
        "one_traffic_unit": 0.7234480889129845,
        "baseline": 1.0248847926267282
      },
      "NO": {
        "one_flight": 0.005927524419086306,
        "one_traffic_unit": 4.673678665496049,
        "baseline": 6.621044776119404
      },
      "NO2": {
        "one_flight": 0.019193201405684205,
        "one_traffic_unit": 15.133274802458299,
        "baseline": 21.438805970149257
      },
      "NOx": {
        "one_flight": 0.02827336014644771,
        "one_traffic_unit": 22.292712906057943,
        "baseline": 31.58134328358209
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.0075597103210129175,
        "one_traffic_unit": 5.960609243697479,
        "baseline": 8.444196428571429
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1117.0,
      "car_coef": 1.4166666666666667
    },
    {
      "date": "2020-09-28",
      "SO2": {
        "one_flight": 0.001416993938843613,
        "one_traffic_unit": 0.23805498172572698,
        "baseline": 1.4382488479262672
      },
      "NO": {
        "one_flight": 0.005795551753635586,
        "one_traffic_unit": 0.9736526946107784,
        "baseline": 5.88248502994012
      },
      "NO2": {
        "one_flight": 0.022621751570750123,
        "one_traffic_unit": 3.800454263886021,
        "baseline": 22.961077844311376
      },
      "NOx": {
        "one_flight": 0.031501873101088464,
        "one_traffic_unit": 5.292314680982861,
        "baseline": 31.97440119760479
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01029102158104621,
        "one_traffic_unit": 1.7288916256157634,
        "baseline": 10.445386904761904
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 1015.0,
      "car_coef": 6.041666666666667
    },
    {
      "date": "2020-10-05",
      "SO2": {
        "one_flight": 0.000827768231404098,
        "one_traffic_unit": 1.7049015500628404,
        "baseline": 0.7814132104454685
      },
      "NO": {
        "one_flight": 0.01364406779661017,
        "one_traffic_unit": 28.101818181818185,
        "baseline": 12.88
      },
      "NO2": {
        "one_flight": 0.03506023905894258,
        "one_traffic_unit": 72.2113432835821,
        "baseline": 33.096865671641794
      },
      "NOx": {
        "one_flight": 0.055977422210979004,
        "one_traffic_unit": 115.29313432835822,
        "baseline": 52.84268656716418
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.00998600181598063,
        "one_traffic_unit": 20.567532467532466,
        "baseline": 9.426785714285714
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 944.0,
      "car_coef": 0.4583333333333333
    },
    {
      "date": "2020-10-12",
      "SO2": {
        "one_flight": 0.0007514378594648662,
        "one_traffic_unit": -0.3782848151062156,
        "baseline": 0.646236559139785
      },
      "NO": {
        "one_flight": 0.015041825754946201,
        "one_traffic_unit": -7.572275209319258,
        "baseline": 12.935970149253732
      },
      "NO2": {
        "one_flight": 0.03277976397084346,
        "one_traffic_unit": -16.501812886785586,
        "baseline": 28.190597014925373
      },
      "NOx": {
        "one_flight": 0.055838424158278374,
        "one_traffic_unit": -28.109879868947946,
        "baseline": 48.0210447761194
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.011519414451827243,
        "one_traffic_unit": -5.79904181184669,
        "baseline": 9.90669642857143
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 860.0,
      "car_coef": -1.7083333333333333
    },
    {
      "date": "2020-10-19",
      "SO2": {
        "one_flight": 0.001142484320863513,
        "one_traffic_unit": -0.05175906940863598,
        "baseline": 0.9791090629800306
      },
      "NO": {
        "one_flight": 0.004100259224840867,
        "one_traffic_unit": -0.18575799941966287,
        "baseline": 3.513922155688623
      },
      "NO2": {
        "one_flight": 0.018662441744282728,
        "one_traffic_unit": -0.8454826030757866,
        "baseline": 15.993712574850298
      },
      "NOx": {
        "one_flight": 0.02491894856727618,
        "one_traffic_unit": -1.1289271676910495,
        "baseline": 21.355538922155688
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.011970918764238486,
        "one_traffic_unit": -0.5423300818124607,
        "baseline": 10.259077380952382
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 857.0,
      "car_coef": -18.916666666666668
    },
    {
      "date": "2020-10-26",
      "SO2": {
        "one_flight": 0.00193515529378907,
        "one_traffic_unit": -0.08581993042021095,
        "baseline": 1.8093701996927805
      },
      "NO": {
        "one_flight": 0.009818341447841009,
        "one_traffic_unit": -0.4354220989912101,
        "baseline": 9.180149253731344
      },
      "NO2": {
        "one_flight": 0.02987820257003751,
        "one_traffic_unit": -1.3250333313668812,
        "baseline": 27.93611940298507
      },
      "NOx": {
        "one_flight": 0.044923936467395634,
        "one_traffic_unit": -1.992278921597546,
        "baseline": 42.00388059701492
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.013604851031321622,
        "one_traffic_unit": -0.6033455674760025,
        "baseline": 12.720535714285717
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 935.0,
      "car_coef": -21.08333333333333
    },
    {
      "date": "2020-11-02",
      "SO2": {
        "one_flight": 0.0018802456499488228,
        "one_traffic_unit": -0.04998639455782313,
        "baseline": 1.837
      },
      "NO": {
        "one_flight": 0.009767708658665933,
        "one_traffic_unit": -0.2596748669256222,
        "baseline": 9.543051359516616
      },
      "NO2": {
        "one_flight": 0.030606517887237273,
        "one_traffic_unit": -0.8136753190702263,
        "baseline": 29.902567975830816
      },
      "NOx": {
        "one_flight": 0.045576507404441115,
        "one_traffic_unit": -1.2116529995684073,
        "baseline": 44.52824773413897
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.016106904588671984,
        "one_traffic_unit": -0.4282026063437423,
        "baseline": 15.73644578313253
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 977.0,
      "car_coef": -36.75
    },
    {
      "date": "2020-11-09",
      "SO2": {
        "one_flight": 0.0018446454647171495,
        "one_traffic_unit": null,
        "baseline": 1.494162826420891
      },
      "NO": {
        "one_flight": 0.007423301545058032,
        "one_traffic_unit": null,
        "baseline": 6.0128742514970055
      },
      "NO2": {
        "one_flight": 0.030351888814962667,
        "one_traffic_unit": null,
        "baseline": 24.58502994011976
      },
      "NOx": {
        "one_flight": 0.04172931913949878,
        "one_traffic_unit": null,
        "baseline": 33.80074850299401
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.020046296296296298,
        "one_traffic_unit": null,
        "baseline": 16.2375
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 810.0,
      "car_coef": 0.0
    },
    {
      "date": "2020-11-16",
      "SO2": {
        "one_flight": 0.00192449612148843,
        "one_traffic_unit": null,
        "baseline": 1.0815668202764976
      },
      "NO": {
        "one_flight": 0.0276323896531577,
        "one_traffic_unit": null,
        "baseline": 15.529402985074627
      },
      "NO2": {
        "one_flight": 0.06718887767567855,
        "one_traffic_unit": null,
        "baseline": 37.76014925373134
      },
      "NOx": {
        "one_flight": 0.10955091092579806,
        "one_traffic_unit": null,
        "baseline": 61.56761194029851
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.027023756566683606,
        "one_traffic_unit": null,
        "baseline": 15.187351190476187
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 562.0,
      "car_coef": 0.0
    },
    {
      "date": "2020-11-23",
      "SO2": {
        "one_flight": 0.0008345637033391495,
        "one_traffic_unit": -0.01320769189919576,
        "baseline": 0.429800307219662
      },
      "NO": {
        "one_flight": 0.015608104179989533,
        "one_traffic_unit": -0.2470117383670559,
        "baseline": 8.03817365269461
      },
      "NO2": {
        "one_flight": 0.060155514214289864,
        "one_traffic_unit": -0.9520130034425387,
        "baseline": 30.98008982035928
      },
      "NOx": {
        "one_flight": 0.08407534445671763,
        "one_traffic_unit": -1.3305649903777592,
        "baseline": 43.29880239520958
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.030647827092001846,
        "one_traffic_unit": -0.4850283519297604,
        "baseline": 15.783630952380951
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 515.0,
      "car_coef": -32.541666666666664
    },
    {
      "date": "2020-11-30",
      "SO2": {
        "one_flight": 0.0026126445481284193,
        "one_traffic_unit": -0.050017195130339094,
        "baseline": 1.2566820276497697
      },
      "NO": {
        "one_flight": 0.04192912775002326,
        "one_traffic_unit": -0.8027029033934803,
        "baseline": 20.16791044776119
      },
      "NO2": {
        "one_flight": 0.0779672324448444,
        "one_traffic_unit": -1.4926264201381154,
        "baseline": 37.50223880597015
      },
      "NOx": {
        "one_flight": 0.14225804449685048,
        "one_traffic_unit": -2.7234276379297544,
        "baseline": 68.42611940298508
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.031502450252450256,
        "one_traffic_unit": -0.6030916844349681,
        "baseline": 15.152678571428572
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 481.0,
      "car_coef": -25.125
    },
    {
      "date": "2020-12-07",
      "SO2": {
        "one_flight": 0.0017358337327581614,
        "one_traffic_unit": -0.04670166679726416,
        "baseline": 0.9165202108963092
      },
      "NO": {
        "one_flight": 0.03925731675731676,
        "one_traffic_unit": -1.0561968533943056,
        "baseline": 20.727863247863247
      },
      "NO2": {
        "one_flight": 0.07981578606578606,
        "one_traffic_unit": -2.1474005117317216,
        "baseline": 42.14273504273504
      },
      "NOx": {
        "one_flight": 0.14000161875161873,
        "one_traffic_unit": -3.766667755457564,
        "baseline": 73.92085470085469
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.025888893190852302,
        "one_traffic_unit": -0.6965266550201282,
        "baseline": 13.669335604770016
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 528.0,
      "car_coef": -19.625
    },
    {
      "date": "2020-12-14",
      "SO2": {
        "one_flight": 0.001277741204008485,
        "one_traffic_unit": -0.025800543542479022,
        "baseline": 0.6708141321044546
      },
      "NO": {
        "one_flight": 0.012140575990875391,
        "one_traffic_unit": -0.24514624596959925,
        "baseline": 6.37380239520958
      },
      "NO2": {
        "one_flight": 0.04872996863416025,
        "one_traffic_unit": -0.9839705204974666,
        "baseline": 25.58323353293413
      },
      "NOx": {
        "one_flight": 0.06734616481323068,
        "one_traffic_unit": -1.3598744818056194,
        "baseline": 35.35673652694611
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.02031207482993197,
        "one_traffic_unit": -0.41014766483516474,
        "baseline": 10.663839285714284
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 525.0,
      "car_coef": -26.0
    },
    {
      "date": "2020-12-21",
      "SO2": {
        "one_flight": 0.0016168852104247362,
        "one_traffic_unit": -0.05094096775315685,
        "baseline": 1.13343653250774
      },
      "NO": {
        "one_flight": 0.017800157557433947,
        "one_traffic_unit": -0.5608049639443234,
        "baseline": 12.477910447761197
      },
      "NO2": {
        "one_flight": 0.042122767049204764,
        "one_traffic_unit": -1.3271038068086534,
        "baseline": 29.528059701492538
      },
      "NOx": {
        "one_flight": 0.0694102241999702,
        "one_traffic_unit": -2.1868120073788364,
        "baseline": 48.65656716417911
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01836385945248285,
        "one_traffic_unit": -0.5785647405029428,
        "baseline": 12.873065476190478
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 701.0,
      "car_coef": -22.25
    },
    {
      "date": "2020-12-28",
      "SO2": {
        "one_flight": 0.0012486938083552234,
        "one_traffic_unit": -0.03516373456698125,
        "baseline": 1.1325652841781877
      },
      "NO": {
        "one_flight": 0.012269837392469746,
        "one_traffic_unit": -0.3455237003354223,
        "baseline": 11.12874251497006
      },
      "NO2": {
        "one_flight": 0.0324270972938357,
        "one_traffic_unit": -0.9131604836898001,
        "baseline": 29.41137724550898
      },
      "NOx": {
        "one_flight": 0.05123672170543147,
        "one_traffic_unit": -1.4428472937695112,
        "baseline": 46.47170658682634
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.013762501968813984,
        "one_traffic_unit": -0.3875577527259286,
        "baseline": 12.482589285714283
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 907.0,
      "car_coef": -32.208333333333336
    },
    {
      "date": "2021-01-04",
      "SO2": {
        "one_flight": 0.0022452384642736665,
        "one_traffic_unit": -0.06951669626789306,
        "baseline": 1.897226502311248
      },
      "NO": {
        "one_flight": 0.03183449615826194,
        "one_traffic_unit": -0.9856543238008431,
        "baseline": 26.900149253731342
      },
      "NO2": {
        "one_flight": 0.04896582177868056,
        "one_traffic_unit": -1.5160715506437277,
        "baseline": 41.37611940298507
      },
      "NOx": {
        "one_flight": 0.09777903382495805,
        "one_traffic_unit": -3.027418024381907,
        "baseline": 82.62328358208956
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.02891430684699916,
        "one_traffic_unit": -0.8952399127589968,
        "baseline": 24.43258928571429
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 845.0,
      "car_coef": -27.291666666666668
    },
    {
      "date": "2021-01-11",
      "SO2": {
        "one_flight": 0.0016362775639850958,
        "one_traffic_unit": -0.051436372091627804,
        "baseline": 1.3352024922118382
      },
      "NO": {
        "one_flight": 0.016416755523961855,
        "one_traffic_unit": -0.5160605781400787,
        "baseline": 13.396072507552873
      },
      "NO2": {
        "one_flight": 0.03983935341508205,
        "one_traffic_unit": -1.2523497548651157,
        "baseline": 32.50891238670695
      },
      "NOx": {
        "one_flight": 0.06501392097624549,
        "one_traffic_unit": -2.0437120841072103,
        "baseline": 53.05135951661632
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.020205168159979223,
        "one_traffic_unit": -0.635149298948689,
        "baseline": 16.487417218543047
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 816.0,
      "car_coef": -25.95833333333333
    },
    {
      "date": "2021-01-18",
      "SO2": {
        "one_flight": 0.0035997020069651387,
        "one_traffic_unit": -0.12352035316462195,
        "baseline": 2.490993788819876
      },
      "NO": {
        "one_flight": 0.013842546121629573,
        "one_traffic_unit": -0.47499381402484286,
        "baseline": 9.579041916167665
      },
      "NO2": {
        "one_flight": 0.03823660482503201,
        "one_traffic_unit": -1.3120527539961397,
        "baseline": 26.45973053892215
      },
      "NOx": {
        "one_flight": 0.05945882800872244,
        "one_traffic_unit": -2.0402731726629386,
        "baseline": 41.14550898203593
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.015701125103220477,
        "one_traffic_unit": -0.5387691853600943,
        "baseline": 10.86517857142857
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 692.0,
      "car_coef": -20.166666666666668
    },
    {
      "date": "2021-01-25",
      "SO2": {
        "one_flight": 0.007151047994215275,
        "one_traffic_unit": -0.2228056146428267,
        "baseline": 4.669634340222575
      },
      "NO": {
        "one_flight": 0.026781276650374598,
        "one_traffic_unit": -0.8344257806454688,
        "baseline": 17.488173652694613
      },
      "NO2": {
        "one_flight": 0.05751024749887667,
        "one_traffic_unit": -1.791850097022655,
        "baseline": 37.55419161676647
      },
      "NOx": {
        "one_flight": 0.09857314467542709,
        "one_traffic_unit": -3.0712491517958123,
        "baseline": 64.36826347305389
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.015607224896084005,
        "one_traffic_unit": -0.4862752059074127,
        "baseline": 10.191517857142856
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 653.0,
      "car_coef": -20.95833333333333
    },
    {
      "date": "2021-02-01",
      "SO2": {
        "one_flight": 0.004199072526130631,
        "one_traffic_unit": -0.09273307337823467,
        "baseline": 2.66221198156682
      },
      "NO": {
        "one_flight": 0.018653072404087725,
        "one_traffic_unit": -0.4119378079834526,
        "baseline": 11.826047904191617
      },
      "NO2": {
        "one_flight": 0.04320609569504524,
        "one_traffic_unit": -0.954171193172436,
        "baseline": 27.39266467065868
      },
      "NOx": {
        "one_flight": 0.07180670205330662,
        "one_traffic_unit": -1.5857921312672187,
        "baseline": 45.5254491017964
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.020867367057232987,
        "one_traffic_unit": -0.4608386896122746,
        "baseline": 13.229910714285714
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 634.0,
      "car_coef": -28.70833333333333
    },
    {
      "date": "2021-02-08",
      "SO2": {
        "one_flight": 0.0014772905862014771,
        "one_traffic_unit": -0.031229235880398668,
        "baseline": 0.8952380952380952
      },
      "NO": {
        "one_flight": 0.020868430126594745,
        "one_traffic_unit": -0.4411489066296424,
        "baseline": 12.646268656716416
      },
      "NO2": {
        "one_flight": 0.05111029013349096,
        "one_traffic_unit": -1.0804477611940297,
        "baseline": 30.97283582089552
      },
      "NOx": {
        "one_flight": 0.0831077286833161,
        "one_traffic_unit": -1.7568587296077751,
        "baseline": 50.36328358208956
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01889856396353921,
        "one_traffic_unit": -0.3995068521594684,
        "baseline": 11.452529761904762
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 606.0,
      "car_coef": -28.666666666666668
    },
    {
      "date": "2021-02-15",
      "SO2": {
        "one_flight": 0.0016216397814727331,
        "one_traffic_unit": null,
        "baseline": 0.9713622291021672
      },
      "NO": {
        "one_flight": 0.008605137916427877,
        "one_traffic_unit": null,
        "baseline": 5.154477611940298
      },
      "NO2": {
        "one_flight": 0.038135200458475564,
        "one_traffic_unit": null,
        "baseline": 22.842985074626863
      },
      "NOx": {
        "one_flight": 0.05132783494879526,
        "one_traffic_unit": null,
        "baseline": 30.74537313432836
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01979315724620399,
        "one_traffic_unit": null,
        "baseline": 11.85610119047619
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 599.0,
      "car_coef": 0.0
    },
    {
      "date": "2021-02-22",
      "SO2": {
        "one_flight": 0.0028458510086367384,
        "one_traffic_unit": null,
        "baseline": 1.71889400921659
      },
      "NO": {
        "one_flight": 0.026002547884363722,
        "one_traffic_unit": null,
        "baseline": 15.705538922155688
      },
      "NO2": {
        "one_flight": 0.05747437244715866,
        "one_traffic_unit": null,
        "baseline": 34.71452095808383
      },
      "NOx": {
        "one_flight": 0.0973410794305429,
        "one_traffic_unit": null,
        "baseline": 58.79401197604791
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.03856630400504573,
        "one_traffic_unit": null,
        "baseline": 23.29404761904762
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 604.0,
      "car_coef": 0.0
    },
    {
      "date": "2021-03-01",
      "SO2": {
        "one_flight": 0.003864247311827957,
        "one_traffic_unit": -0.11368366285119667,
        "baseline": 2.349462365591398
      },
      "NO": {
        "one_flight": 0.02074553220738413,
        "one_traffic_unit": -0.6103201733269138,
        "baseline": 12.613283582089553
      },
      "NO2": {
        "one_flight": 0.07073350353495679,
        "one_traffic_unit": -2.080934039480019,
        "baseline": 43.00597014925373
      },
      "NOx": {
        "one_flight": 0.10255572466614296,
        "one_traffic_unit": -3.0171232546942703,
        "baseline": 62.35388059701492
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.036373648966165406,
        "one_traffic_unit": -1.0700892857142854,
        "baseline": 22.11517857142857
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 608.0,
      "car_coef": -20.666666666666668
    },
    {
      "date": "2021-03-08",
      "SO2": {
        "one_flight": 0.0025193484587486444,
        "one_traffic_unit": -0.09345849689935712,
        "baseline": 1.5771121351766513
      },
      "NO": {
        "one_flight": 0.016308517151001508,
        "one_traffic_unit": -0.6049855843867818,
        "baseline": 10.209131736526944
      },
      "NO2": {
        "one_flight": 0.04779729678024143,
        "one_traffic_unit": -1.773102683521845,
        "baseline": 29.921107784431136
      },
      "NOx": {
        "one_flight": 0.07279777505691493,
        "one_traffic_unit": -2.700527833222444,
        "baseline": 45.57140718562874
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.023062623611745017,
        "one_traffic_unit": -0.8555379188712522,
        "baseline": 14.43720238095238
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 626.0,
      "car_coef": -16.875
    },
    {
      "date": "2021-03-15",
      "SO2": {
        "one_flight": 0.002509560781916574,
        "one_traffic_unit": -0.07546679195978606,
        "baseline": 1.5785137318255251
      },
      "NO": {
        "one_flight": 0.011280993133308529,
        "one_traffic_unit": -0.33923878952276004,
        "baseline": 7.095744680851064
      },
      "NO2": {
        "one_flight": 0.044857954682735665,
        "one_traffic_unit": -1.34895554559876,
        "baseline": 28.215653495440733
      },
      "NOx": {
        "one_flight": 0.06214476589945926,
        "one_traffic_unit": -1.868799573741508,
        "baseline": 39.08905775075988
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.016002051700918403,
        "one_traffic_unit": -0.4812091085200482,
        "baseline": 10.065290519877676
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 629.0,
      "car_coef": -20.916666666666668
    },
    {
      "date": "2021-03-22",
      "SO2": {
        "one_flight": 0.0022928262213976498,
        "one_traffic_unit": -0.10058499364137347,
        "baseline": 1.4123809523809523
      },
      "NO": {
        "one_flight": 0.014956450734893849,
        "one_traffic_unit": -0.6561310613194975,
        "baseline": 9.21317365269461
      },
      "NO2": {
        "one_flight": 0.05304771949607279,
        "one_traffic_unit": -2.3271735460829084,
        "baseline": 32.67739520958084
      },
      "NOx": {
        "one_flight": 0.07597281087176297,
        "one_traffic_unit": -3.3328843796087355,
        "baseline": 46.79925149700599
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.024411284400123686,
        "one_traffic_unit": -1.0709092835947436,
        "baseline": 15.03735119047619
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 616.0,
      "car_coef": -14.041666666666666
    },
    {
      "date": "2021-03-29",
      "SO2": {
        "one_flight": 0.002938426125737304,
        "one_traffic_unit": -0.13454096335940716,
        "baseline": 1.9452380952380952
      },
      "NO": {
        "one_flight": 0.01695472787121793,
        "one_traffic_unit": -0.7763017764204913,
        "baseline": 11.22402985074627
      },
      "NO2": {
        "one_flight": 0.06244622807413086,
        "one_traffic_unit": -2.8592094283625102,
        "baseline": 41.33940298507463
      },
      "NOx": {
        "one_flight": 0.08843599224421698,
        "one_traffic_unit": -4.0491960944556755,
        "baseline": 58.544626865671646
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.022817984822327723,
        "one_traffic_unit": -1.0447612186084807,
        "baseline": 15.105505952380952
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 662.0,
      "car_coef": -14.458333333333334
    },
    {
      "date": "2021-04-05",
      "SO2": {
        "one_flight": 0.0014915891195418757,
        "one_traffic_unit": -0.033160381268130965,
        "baseline": 1.0500787401574805
      },
      "NO": {
        "one_flight": 0.0047396540027137045,
        "one_traffic_unit": -0.10536999214454046,
        "baseline": 3.336716417910448
      },
      "NO2": {
        "one_flight": 0.02849347014925373,
        "one_traffic_unit": -0.6334548311076198,
        "baseline": 20.059402985074627
      },
      "NOx": {
        "one_flight": 0.03575305291723203,
        "one_traffic_unit": -0.7948468185388846,
        "baseline": 25.170149253731346
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.012665508319805195,
        "one_traffic_unit": -0.28157424812030074,
        "baseline": 8.916517857142857
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 704.0,
      "car_coef": -31.666666666666668
    },
    {
      "date": "2021-04-12",
      "SO2": {
        "one_flight": 0.0014995496425287572,
        "one_traffic_unit": -0.038551528673943194,
        "baseline": 0.9927018633540372
      },
      "NO": {
        "one_flight": 0.010024512907719305,
        "one_traffic_unit": -0.25771757455961863,
        "baseline": 6.63622754491018
      },
      "NO2": {
        "one_flight": 0.04195641948730937,
        "one_traffic_unit": -1.0786465903145166,
        "baseline": 27.775149700598803
      },
      "NOx": {
        "one_flight": 0.05730796714727644,
        "one_traffic_unit": -1.473315504912505,
        "baseline": 37.93787425149701
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.01626789310890519,
        "one_traffic_unit": -0.41822699953767906,
        "baseline": 10.769345238095235
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 662.0,
      "car_coef": -25.75
    },
    {
      "date": "2021-04-19",
      "SO2": {
        "one_flight": 0.0016525349205320696,
        "one_traffic_unit": -0.04628247366999731,
        "baseline": 1.1088509316770188
      },
      "NO": {
        "one_flight": 0.007455346219721068,
        "one_traffic_unit": -0.20880155743024018,
        "baseline": 5.002537313432836
      },
      "NO2": {
        "one_flight": 0.04202304424227595,
        "one_traffic_unit": -1.1769375730045428,
        "baseline": 28.197462686567164
      },
      "NOx": {
        "one_flight": 0.05344996329826278,
        "one_traffic_unit": -1.4969707981829983,
        "baseline": 35.86492537313433
      },
      "PM10": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "PM2.5": {
        "one_flight": 0.018573025335320417,
        "one_traffic_unit": -0.5201739130434784,
        "baseline": 12.4625
      },
      "PM1": {
        "one_flight": null,
        "one_traffic_unit": null,
        "baseline": null
      },
      "number_of_planes": 671.0,
      "car_coef": -23.95833333333333
    },
    {
      "date": "2021-04-26",
      "SO2": {
        "one_flight": 0.001128776371308017,
        "one_traffic_unit": -0.0347052972972973,
        "baseline": 0.80256
      },
      "NO": {
        "one_flight": 0.004291525123514193,
        "one_traffic_unit": -0.13194699947323638,
        "baseline": 3.051274362818591
      },
      "NO2": {
        "one_flight": 0.0319258092472751,
        "one_traffic_unit": -0.9815892053973014,
        "baseline": 22.699250374812596
      },
      "NOx": {
        "one_flight": 0.0385037439086364,
        "one_traffic_unit": -1.1838340289314802,
        "baseline": 27.37616191904048
      },
      "PM10": {
        "one_flight": 0.014534944858498627,
        "one_traffic_unit": -0.4468906289467037,
        "baseline": 10.334345794392524
      },
      "PM2.5": {
        "one_flight": 0.011970644563135709,
        "one_traffic_unit": -0.36804879067630225,
        "baseline": 8.511128284389489
      },
      "PM1": {
        "one_flight": 0.0077520144064566155,
        "one_traffic_unit": -0.23834301591310936,
        "baseline": 5.511682242990654
      },
      "number_of_planes": 711.0,
      "car_coef": -23.125
    },
    {
      "date": "2021-05-03",
      "SO2": {
        "one_flight": 0.0021510673234811165,
        "one_traffic_unit": -0.1260751879699248,
        "baseline": 1.497142857142857
      },
      "NO": {
        "one_flight": 0.010124806999485331,
        "one_traffic_unit": -0.5934202670856245,
        "baseline": 7.046865671641791
      },
      "NO2": {
        "one_flight": 0.03649639732372619,
        "one_traffic_unit": -2.1390730557737627,
        "baseline": 25.40149253731343
      },
      "NOx": {
        "one_flight": 0.05200913535769429,
        "one_traffic_unit": -3.048282796543598,
        "baseline": 36.19835820895523
      },
      "PM10": {
        "one_flight": 0.015898245073891627,
        "one_traffic_unit": -0.9318045112781955,
        "baseline": 11.065178571428572
      },
      "PM2.5": {
        "one_flight": 0.007672670361247947,
        "one_traffic_unit": -0.4496992481203007,
        "baseline": 5.340178571428571
      },
      "PM1": {
        "one_flight": 0.0049970922276956755,
        "one_traffic_unit": -0.29288220551378447,
        "baseline": 3.4779761904761903
      },
      "number_of_planes": 696.0,
      "car_coef": -11.875
    },
    {
      "date": "2021-05-10",
      "SO2": {
        "one_flight": 0.0015088092518280105,
        "one_traffic_unit": -0.06133454997152668,
        "baseline": 1.1934681181959563
      },
      "NO": {
        "one_flight": 0.007597222484291563,
        "one_traffic_unit": -0.30883441465051625,
        "baseline": 6.009402985074627
      },
      "NO2": {
        "one_flight": 0.025419174670264354,
        "one_traffic_unit": -1.0333139441976416,
        "baseline": 20.106567164179104
      },
      "NOx": {
        "one_flight": 0.037055493707190974,
        "one_traffic_unit": -1.5063415257758321,
        "baseline": 29.31089552238806
      },
      "PM10": {
        "one_flight": 0.013179707723797484,
        "one_traffic_unit": -0.535767818904864,
        "baseline": 10.42514880952381
      },
      "PM2.5": {
        "one_flight": 0.006249811871651316,
        "one_traffic_unit": -0.2540608748852861,
        "baseline": 4.943601190476191
      },
      "PM1": {
        "one_flight": 0.0034408674974414546,
        "one_traffic_unit": -0.13987457938207407,
        "baseline": 2.7217261904761907
      },
      "number_of_planes": 791.0,
      "car_coef": -19.45833333333333
    },
    {
      "date": "2021-05-17",
      "SO2": {
        "one_flight": 0.0022352176987885126,
        "one_traffic_unit": -0.1599459100181064,
        "baseline": 1.806055900621118
      },
      "NO": {
        "one_flight": 0.011229953459417796,
        "one_traffic_unit": -0.80358397595952,
        "baseline": 9.07380239520958
      },
      "NO2": {
        "one_flight": 0.0319903509812059,
        "one_traffic_unit": -2.2891398015776563,
        "baseline": 25.848203592814368
      },
      "NOx": {
        "one_flight": 0.04919739728463864,
        "one_traffic_unit": -3.5204277791280907,
        "baseline": 39.75149700598802
      },
      "PM10": {
        "one_flight": 0.012181938059877417,
        "one_traffic_unit": -0.8717053241960991,
        "baseline": 9.843005952380953
      },
      "PM2.5": {
        "one_flight": 0.005386610089580387,
        "one_traffic_unit": -0.3854507116499737,
        "baseline": 4.352380952380953
      },
      "PM1": {
        "one_flight": 0.0029113625648279117,
        "one_traffic_unit": -0.2083289404322615,
        "baseline": 2.3523809523809525
      },
      "number_of_planes": 808.0,
      "car_coef": -11.291666666666666
    },
    {
      "date": "2021-05-24",
      "SO2": {
        "one_flight": 0.00169897518212125,
        "one_traffic_unit": -0.18610312764158923,
        "baseline": 1.5120879120879125
      },
      "NO": {
        "one_flight": 0.009270592210864239,
        "one_traffic_unit": -1.0154864083285136,
        "baseline": 8.250827067669173
      },
      "NO2": {
        "one_flight": 0.030595083213652112,
        "one_traffic_unit": -3.351338345864662,
        "baseline": 27.22962406015038
      },
      "NOx": {
        "one_flight": 0.04479800625158402,
        "one_traffic_unit": -4.907104684788895,
        "baseline": 39.87022556390978
      },
      "PM10": {
        "one_flight": 0.015931375018894543,
        "one_traffic_unit": -1.745098309761987,
        "baseline": 14.178923766816144
      },
      "PM2.5": {
        "one_flight": 0.008410842948556456,
        "one_traffic_unit": -0.9213107968264919,
        "baseline": 7.485650224215246
      },
      "PM1": {
        "one_flight": 0.005428024386557162,
        "one_traffic_unit": -0.594577440496723,
        "baseline": 4.830941704035874
      },
      "number_of_planes": 890.0,
      "car_coef": -8.125
    },
    {
      "date": "2021-05-31",
      "SO2": {
        "one_flight": 0.001321391519920238,
        "one_traffic_unit": -0.311061186731862,
        "baseline": 1.2183229813664596
      },
      "NO": {
        "one_flight": 0.007211282424305402,
        "one_traffic_unit": -1.6975665689896802,
        "baseline": 6.6488023952095805
      },
      "NO2": {
        "one_flight": 0.030863814670009225,
        "one_traffic_unit": -7.265473308701746,
        "baseline": 28.456437125748504
      },
      "NOx": {
        "one_flight": 0.04192022679153622,
        "one_traffic_unit": -9.86819977067142,
        "baseline": 38.6504491017964
      },
      "PM10": {
        "one_flight": 0.013083133199049688,
        "one_traffic_unit": -3.0798252279635268,
        "baseline": 12.062648809523813
      },
      "PM2.5": {
        "one_flight": 0.006710793048238818,
        "one_traffic_unit": -1.5797492401215805,
        "baseline": 6.18735119047619
      },
      "PM1": {
        "one_flight": 0.004902805753537858,
        "one_traffic_unit": -1.1541413373860183,
        "baseline": 4.520386904761905
      },
      "number_of_planes": 922.0,
      "car_coef": -3.9166666666666665
    },
    {
      "date": "2021-06-07",
      "SO2": {
        "one_flight": 0.0011164518243390867,
        "one_traffic_unit": 0.5227621483375958,
        "baseline": 1.1108695652173912
      },
      "NO": {
        "one_flight": 0.008277656941423536,
        "one_traffic_unit": 3.8758911325724323,
        "baseline": 8.236268656716419
      },
      "NO2": {
        "one_flight": 0.0351116777919448,
        "one_traffic_unit": 16.44052677787533,
        "baseline": 34.93611940298508
      },
      "NOx": {
        "one_flight": 0.047801845046126154,
        "one_traffic_unit": 22.38251097453907,
        "baseline": 47.56283582089552
      },
      "PM10": {
        "one_flight": 0.01944514237855946,
        "one_traffic_unit": 9.104901960784312,
        "baseline": 19.347916666666663
      },
      "PM2.5": {
        "one_flight": 0.009711803062933717,
        "one_traffic_unit": 4.5474089635854344,
        "baseline": 9.663244047619049
      },
      "PM1": {
        "one_flight": 0.0076378918401531475,
        "one_traffic_unit": 3.5763305322128853,
        "baseline": 7.599702380952381
      },
      "number_of_planes": 995.0,
      "car_coef": 2.125
    },
    {
      "date": "2021-06-14",
      "SO2": {
        "one_flight": 0.0005418635693294724,
        "one_traffic_unit": null,
        "baseline": 0.6253105590062111
      },
      "NO": {
        "one_flight": 0.0041080990196332035,
        "one_traffic_unit": null,
        "baseline": 4.740746268656717
      },
      "NO2": {
        "one_flight": 0.018955741224553145,
        "one_traffic_unit": null,
        "baseline": 21.874925373134328
      },
      "NOx": {
        "one_flight": 0.025252205178613003,
        "one_traffic_unit": null,
        "baseline": 29.141044776119404
      },
      "PM10": {
        "one_flight": 0.023418157340925973,
        "one_traffic_unit": null,
        "baseline": 27.024553571428573
      },
      "PM2.5": {
        "one_flight": 0.012099993810349095,
        "one_traffic_unit": null,
        "baseline": 13.963392857142855
      },
      "PM1": {
        "one_flight": 0.008245517661137246,
        "one_traffic_unit": null,
        "baseline": 9.515327380952382
      },
      "number_of_planes": 1154.0,
      "car_coef": 0.0
    },
    {
      "date": "2021-06-21",
      "SO2": {
        "one_flight": 0.0010925022182786159,
        "one_traffic_unit": null,
        "baseline": 1.376552795031056
      },
      "NO": {
        "one_flight": 0.005860778443113772,
        "one_traffic_unit": null,
        "baseline": 7.384580838323353
      },
      "NO2": {
        "one_flight": 0.020310450527516396,
        "one_traffic_unit": null,
        "baseline": 25.59116766467066
      },
      "NOx": {
        "one_flight": 0.029297714095618283,
        "one_traffic_unit": null,
        "baseline": 36.91511976047904
      },
      "PM10": {
        "one_flight": 0.011956845238095239,
        "one_traffic_unit": null,
        "baseline": 15.065625
      },
      "PM2.5": {
        "one_flight": 0.005262896825396825,
        "one_traffic_unit": null,
        "baseline": 6.63125
      },
      "PM1": {
        "one_flight": 0.0033411281179138324,
        "one_traffic_unit": null,
        "baseline": 4.209821428571429
      },
      "number_of_planes": 1260.0,
      "car_coef": 0.0
    },
    {
      "date": "2021-06-28",
      "SO2": {
        "one_flight": 0.0009044207843961153,
        "one_traffic_unit": 0.09781931464174455,
        "baseline": 1.247196261682243
      },
      "NO": {
        "one_flight": 0.00742231554338532,
        "one_traffic_unit": 0.8027743634767338,
        "baseline": 10.235373134328356
      },
      "NO2": {
        "one_flight": 0.02223956360330328,
        "one_traffic_unit": 2.4053614281533506,
        "baseline": 30.668358208955222
      },
      "NOx": {
        "one_flight": 0.033620187676555585,
        "one_traffic_unit": 3.636254023997659,
        "baseline": 46.36223880597015
      },
      "PM10": {
        "one_flight": 0.00993236126938085,
        "one_traffic_unit": 1.0742530345471522,
        "baseline": 13.696726190476191
      },
      "PM2.5": {
        "one_flight": 0.004445185434579924,
        "one_traffic_unit": 0.48077731092436976,
        "baseline": 6.129910714285715
      },
      "PM1": {
        "one_flight": 0.003017736282330191,
        "one_traffic_unit": 0.32638888888888884,
        "baseline": 4.161458333333333
      },
      "number_of_planes": 1379.0,
      "car_coef": 12.75
    },
    {
      "date": "2021-07-05",
      "SO2": {
        "one_flight": 0.0010971893361396124,
        "one_traffic_unit": 0.0615985845065005,
        "baseline": 1.5887301587301588
      },
      "NO": {
        "one_flight": 0.007529898766003903,
        "one_traffic_unit": 0.42274481731206404,
        "baseline": 10.903293413173651
      },
      "NO2": {
        "one_flight": 0.020648240811195283,
        "one_traffic_unit": 1.1592369380786083,
        "baseline": 29.89865269461077
      },
      "NOx": {
        "one_flight": 0.03219224534356701,
        "one_traffic_unit": 1.8073423427780948,
        "baseline": 46.61437125748503
      },
      "PM10": {
        "one_flight": 0.0077751948500394625,
        "one_traffic_unit": 0.43651627048234476,
        "baseline": 11.258482142857142
      },
      "PM2.5": {
        "one_flight": 0.0035840691594317287,
        "one_traffic_unit": 0.2012174013385645,
        "baseline": 5.189732142857143
      },
      "PM1": {
        "one_flight": 0.0024971841291765327,
        "one_traffic_unit": 0.14019732287099007,
        "baseline": 3.6159226190476192
      },
      "number_of_planes": 1448.0,
      "car_coef": 25.791666666666668
    }
  ]

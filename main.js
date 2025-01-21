var rova1 = ['0885','0872','0871','0786','0797','0782','0764','0741','073','062','063','9773','9775','0707','988','0822','0854','074','074','084','088','181','10','11','12','13','14','15','16','17','18'];
var rova2 = ['896','087','9931','9962','9990','0920','0933','0950','0982','0994','1913','1915','20','21','22','23','24','25','26','27','28','29'];
var rova3 = ['9809','9839','9859','9879','9888','0818','0847','088','084','9877','9837','9827','9807','9837','9877','9875','9845','9826','9893','9834','9872','9842','9833','8892','8853','884','30','31','32','33','34','35','36','37','38','39'];
var rova34 = ['8890','983','8798','9748','8797','9756','8786','9705','9715','974','9713','9752','9731','9710','9609','8784','8755','8724','8704','8733','8732','8731','8639','8639','8648','8667','8686','8697','341','342','343','344','345','346','347','348','349'];
var rova4 = ['0700','9780','9649','9668','0607','973','9627','965','969','968','9676','9606','8695','9635','9613','9654','9693','9632','9672','865','8636','8643','8620','8673','8661','8681','9631','9660','8589','8587','8598','9505','9503','9569','9547','9567','9524','955','957','9555','9574','9543','9521','932','062','41','42','43','44','45','46','47','48','49','40'];
var rova5 = ['0626','064','0677','0665','068','0684','0612','0632','0692','1622','1601','1519','069','1548','1507','9691','9680','0508','9586','0515','0584','1517','155','1545','1564','153','150','1540','0570','0550','957','968','062','063','066','160','163','932','50','55','53','54'];
var rova6 = ['1651','167','163','1695','2626','264','2675','2654','2623','2601','2509','1568','1576','2632','265','2651','3606','3645','3612','3529','2569','2505','1593','2512','2520','2553','2571','2546','2574','2592','3503','3532','3516','3557','3516','3557','3507','3662','358','246','155','363','60','61','62','63','64','65','66','67','68'];
var rova7 = ['066','160','163','167','1677','1656','1635','1637','1618','1700','1630','1669','1770','1760','1751','1732','1755','1726','1782','1775','1747','270'];
var rova8 = ['363','264','2608','2720','2688','3628','3649','3752','3744','3737','381','2790','2772','2763','2787','2768','3706','2742','2711','2703','2734','2746','2726','2738','81','82','83','84','85','86','87','88','89'];
var rova9 = ['270','177','2708','1729','1769','2820','2862','2890','381','181','1834','1826','1812','1830','1841','1881','2803','2823','1865','1896','282','1898','2827','2857','2835','2875','2893','380','2897','3831','3823','385','91','92','93','94','95','96','97','98','99'];
let chosenR;


window.addEventListener("load", (event) => {
    document.getElementById('welcome').style.display = 'inline';
    let timer = setTimeout(() => {
        page2();
    }
        , 5000);
})

const page2 = () =>{
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page2').style.display = 'inline';
    if (chosenR != null){
        document.getElementById(`rov${chosenR}`).style.display = 'none';
    }
    document.getElementById('back').removeEventListener('click',page2);
    document.getElementById(`R34`).style.display = 'inline';
    var slider = document.getElementById('myRange');
    var output = document.getElementById('valueN');
    output.innerHTML = slider.value;
    slider.oninput = function(){
        output.innerHTML = this.value;
    }
    document.getElementById('R1').addEventListener('click',()=>{
        chosenR = 1;
        rovaim();
    });
    document.getElementById('R2').addEventListener('click',()=>{
        chosenR = 2;
        rovaim();
    });
    document.getElementById('R3').addEventListener('click',()=>{
        chosenR = 3;
        rovaim();
    });
    document.getElementById('R34').addEventListener('click',()=>{
        chosenR = 34;
        rovaim();
    });
    document.getElementById('R4').addEventListener('click',()=>{
        chosenR = 4;
        rovaim();
    });
    document.getElementById('R5').addEventListener('click',()=>{
        chosenR = 5;
        rovaim();
    });
    document.getElementById('R6').addEventListener('click',()=>{
        chosenR = 6;
        rovaim();
    });
    document.getElementById('R7').addEventListener('click',()=>{
        chosenR = 7;
        rovaim();
    });
    document.getElementById('R8').addEventListener('click',()=>{
        chosenR = 8;
        rovaim();
    });
    document.getElementById('R9').addEventListener('click',()=>{
        chosenR = 9;
        rovaim();
    });
    for(let i =1; i<=10; i++){
        document.getElementById(`R`+i).style.display = 'inline';
    }
}

const rovaim = () =>{
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'inline';
    document.getElementById(`rov${chosenR}`).style.display = 'inline';
    document.getElementById(`R34`).style.display = 'none';
    document.getElementById('back').addEventListener('click', page2);
    document.getElementById('next').addEventListener('click', page4);
    for(let i =1; i<=10; i++){
        document.getElementById(`R${i}`).style.display = 'none';
    }
}

const page4 = () =>{
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'inline';
    let chosenV = document.getElementById('valueN').innerHTML;
    chosenV = Number(chosenV);
    let placment = 0;
    let cmut = window[`rova${chosenR}`];
    let first = [];
    for( let i = 0; i < chosenV; i++){
        placment =  Math.floor(Math.random()*cmut.length)+1;
        for(i = 0; i<first.length;i++){
            if(placment === first[i]){
                placment =  Math.floor(Math.random()*cmut.length)+1;
                i = 0;
            }
        }
        first[i]=placment;
        alert('hi');
        document.getElementById('RandP').innerHTML += `<li class = "numbs">הנקודה שלך היא: ${cmut[placment-1]}</li>`;
    }
}

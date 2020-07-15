/*
                    <td style="width:10%">股票編號</td>
                    <th style="width:20%">股票名稱</th>
                    <th style="width:15%">持股數</th>
                    <th style="width:45%">操作</th>
*/


class StockRow extends React.Component{
    render(){

        /*playerName.forEach((name,index)=>{
            console.log(name,playerData[index])
        })*/
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}
/*
        var playerName =this.props.playerData
        var playerData = Object.values(this.props.playerData)*/
class StockTable extends React.Component{
    render(){
        const row = [];
        var name = Object.keys(this.props.stockMarket)
        var price = Object.values(this.props.stockMarket)
        name.forEach((share,index)=> {
                row.push(
                    <StockRow name = {share} price = {price[index]} key ={share} playerData = {this.props.playerData[index]}/>
                );
            })
        console.log(this.props.playerData)
        return (
            <table className={"table table-light table-striped"}>
            <thead>
              <tr>
                <th>股票編號</th>
                <th>股票價格</th>
                <th>股票價格</th>
              </tr>
            </thead>
            <tbody>
                {row}
            </tbody>
            </table>
        );
    }
}

const database = [
    {
  "stocks" : {
      "CBY" : "1139.16",
      "DME" : "497.27",
      "EFS" : "1316.14",
      "EPC" : "1361.03",
      "SFL" : "589.05",
      "lastUpdate" : 1593492854499
    }
  }
];

const playerData = [
    {
    "players" : {
        "M3dqOFeDuZgOGYomaPvQcbTzyA22" : {
          "email" : "donald@donald.com",
          "mode1" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "donald"
        },
        "hNfKtPdUyzgkZMJMl0yvXCNAq572" : {
          "email" : "Haha@gmail.com",
          "mode1" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "BD"
        },
        "i79a7iKwU1XG6aNjkuDeki6puGT2" : {
          "email" : "admin@admin.com",
          "mode1" : {
            "hold_1" : 2,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : "4997445.64"
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "Admin"
        },
        "lnUEYL7LL2auR6KyvCfxCyy85P73" : {
          "email" : "martin@martin.com",
          "mode1" : {
            "hold_1" : 2014,
            "hold_2" : 1500,
            "hold_3" : 1000,
            "hold_4" : 800,
            "hold_5" : 1300,
            "money" : "1760511.27"
          },
          "mode2" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "mode3" : {
            "hold_1" : 0,
            "hold_2" : 0,
            "hold_3" : 0,
            "hold_4" : 0,
            "hold_5" : 0,
            "money" : 5000000
          },
          "name" : "martin"
        }
      }
    }
]
ReactDOM.render(
    <StockTable stockMarket={database[0].stocks} playerData={playerData[0].players} />,
    document.getElementById('stockTable')
  );
var test = Object.entries(playerData[0].players);
const map1 = test.map(x => x[0])
console.log(map1)
/*  database[0].stocks.forEach((share)=> {
    console.log(share)
})*/
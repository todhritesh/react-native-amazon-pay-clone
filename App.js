import { View, Text , StyleSheet , StatusBar , ScrollView , FlatList , Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const recent_payments = [
  {
    key:"1",
    name:"Zomato",
    img_name:require("./assets/zomato.png")
  },
  {
    key:"2",
    name:"Dominos",
    img_name:require("./assets/dominos.png")
  },
  {
    key:"3",
    name:"Ola",
    img_name:require("./assets/ola.jpg")
  },
  {
    key:"4",
    name:"Dominos",
    img_name:require("./assets/dominos.png")
  },
  {
    key:"5",
    name:"Myntra",
    img_name:require("./assets/myntra.webp")
  }
]


export default function App() {
  return (
    <View style={style.container}>
      <StatusBar hidden />
      <View style={style.header}>
          <View style={{position:'absolute',right:19,top:"30%"}}>
            <Entypo name='cross' size={35} color="black" />
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:27,fontWeight:'bold'}}>Amazon Pay</Text>
          </View>
      </View>

      <View style={style.mainSection}>
      <ScrollView>
        <View style={style.totalCashback}>
            <View style={{flexDirection:'row'}}>
              <View>
                <FontAwesome5 name="crown" size={30} color="#caa521" />
              </View>
              <View style={{marginLeft:10}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Total Cashback Earned</Text>
                <Text style={{fontSize:12,color:'#0086b4',fontWeight:'bold'}}>View all your rewards</Text>
              </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:16,fontWeight:'bold'}} >₹ 1400</Text>
            </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={style.accounts}>
            <View style={style.accountsCard}>
              <View>
                <Text style={{fontSize:16,fontWeight:'bold'}} >Amazon Pay Balance</Text>
              </View>
              <View>
                <Text style={{fontSize:14,fontWeight:'bold',color:'green'}}>₹ 1400</Text>
              </View>
            </View>
            <View style={style.accountsCard}>
              <View>
                <Text style={{fontSize:16,fontWeight:'bold'}} >Amazon Pay Later</Text>
              </View>
              <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>₹ 1500.34</Text>
              </View>
            </View>
            <View style={style.accountsCard}>
              <View>
                <Text style={{fontSize:16,fontWeight:'bold'}} >Amazon Pay Upi</Text>
              </View>
              <View>
                <Text style={{fontSize:14,fontWeight:'bold'}}>123345234@apl</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={style.payNow}>
        <Text style={{fontSize:13,position:"absolute",zIndex:2,fontWeight:'bold',left:10,top:4}}>Pay Now</Text>
        <ScrollView style={{marginTop:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                  <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                    <AntDesign name="scan1" size={24} color="black" />
                  </View>
                <Text style={{marginTop:8}}>Scan & Pay</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                  <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Send Money</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                  <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Get Payment</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                  <AntDesign name="filetext1" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Approve Payment</Text>
              </View>
            </View>

            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                  <Fontisto name="radio-btn-active" size={24} color="green" />
                </View>
                <Text style={{marginTop:8}}>Near Me</Text>
              </View>
            </View>

        </ScrollView>
        </View>

        <View style={style.repeatePayment}>
          <Text style={{fontSize:13,position:"absolute",zIndex:2,fontWeight:'bold',left:10,top:4}}>Repeate Payments</Text>         
          <FlatList data={recent_payments} numColumns={4} renderItem={({item})=>{
            return <View style={style.repeatePaymentItems}>
            <View style={{alignItems:'center'}}>
              <View >
                <Image style={{height:40,width:40,resizeMode:'contain'}} source={item.img_name} />
              </View>
              <Text style={{marginTop:8}}>{item.name}</Text>
            </View>
          </View>
          }} />
          <View style={{elevation:5,backgroundColor:'#ffffff',borderTopColor:'#dddddd',borderTopWidth:1,flexDirection:'row',justifyContent:'space-between',padding:7,position:'absolute',bottom:-40,width:"100%"}}>
            <Text style={{color:"#0086b4",fontWeight:'bold',paddingLeft:10}}>Sell All</Text>
            <MaterialCommunityIcons name="greater-than" size={24} color="black" />
          </View>
        </View>


        <View style={style.banners}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Image style={style.bannersCard} source={require("./assets/banner1.jpg")} />
              <Image style={style.bannersCard} source={require("./assets/banner2.jpg")} />
          </ScrollView>
        </View>

        <View style={style.recharge}>
        <Text style={{fontSize:13,position:"absolute",zIndex:2,fontWeight:'bold',left:10,top:4}}>Recharge</Text>
        <ScrollView style={{marginTop:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.rechargeItems}>
              <View style={{alignItems:'center'}}>
                  <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                    <Ionicons name="add-circle-sharp" size={24} color="green" />
                  </View>
                <Text style={{marginTop:8}}>Add Balance</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                  <MaterialIcons name="mobile-friendly" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Mobile Recharge</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                <FontAwesome5 name="satellite-dish" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Dth Recharge</Text>
              </View>
            </View>
            
            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                <Entypo name="google-play" size={24} color="#00c8ff" />
                </View>
                <Text style={{marginTop:8}}>Google Play Recharge</Text>
              </View>
            </View>

            <View style={style.payNowItems}>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#feeac5',borderRadius:33,padding:3}}>
                <Fontisto name="metro" size={24} color="black" />
                </View>
                <Text style={{marginTop:8}}>Metro Recharge</Text>
              </View>
            </View>
        </ScrollView>
        </View>

      </ScrollView>

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#e7e7e7",
    paddingBottom:100
  },
  header:{
    width:"100%",
    backgroundColor:"#ffd801",
    height:70,
    position:'relative'
  },
  mainSection:{
    paddingTop:10
  },
  totalCashback:{
    backgroundColor:"#ffffff",
    padding:15,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  accounts:{
    marginTop:20,
    backgroundColor:"#e7e7e7",
    padding:8,
    flexDirection:'row',
  },
  accountsCard:{
    marginLeft:7,
    backgroundColor:"#ffffff",
    height:100,
    padding:10,
    maxWidth:200,
    minWidth:200,
    flexDirection:'column',
    justifyContent:"space-around"
  },
  payNow:{
    backgroundColor:"#ffffff",
    flexDirection:'row',
    marginTop:10,
    position:'relative',
    paddingTop:15,
  },
  payNowItems:{
    backgroundColor:"#ffffff",
    maxWidth:110,
    minWidth:110,
    paddingTop:10,
    paddingBottom:5,
  },
  repeatePayment:{
    backgroundColor:"#ffffff",
    flexDirection:'row',
    marginTop:10,
    position:'relative',
    paddingTop:20,
    paddingBottom:15
  },
  repeatePaymentItems:{
    backgroundColor:"#ffffff",
    maxWidth:95,
    minWidth:95,
    paddingTop:10,
  },
  banners:{
    marginTop:50,
    display:'flex',
    flexDirection:'row',
  },
  bannersCard:{
    width:350,
    height:150,
    resizeMode:"stretch",
    marginRight:10,
  },recharge:{
    backgroundColor:"#ffffff",
    flexDirection:'row',
    marginTop:10,
    position:'relative',
    paddingTop:15,
  },
  rechargeItems:{
    backgroundColor:"#ffffff",
    maxWidth:110,
    minWidth:110,
    paddingTop:10,
    paddingBottom:5,
  }
})
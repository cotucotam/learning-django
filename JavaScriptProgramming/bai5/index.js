// let myLeads = `["www.google.com.vn","www.home.com","www.tam.com"]`
// myLeads = JSON.parse(myLeads)// chuyen string sang array
// myLeads.push("www.epic.com")
// console.log(myLeads)
// let myLeads = ["www.google.com.vn","www.home.com","www.tam.com"]
// SmyLeads = JSON.stringify(myLeads)
// console.log(SmyLeads)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl  = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
// const tabs =[
//     {url:"https://www.google.com.vn"}
// ]
// localStorage.setItem("myLeads","www.examplelead.com")
// name = localStorage.getItem("myLeads")
localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})
deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
tabBtn.addEventListener("click",function(){
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    //     console.log(tabs[0].url);
    // });  
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, tabs => {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        
        });
    
})



function render(leads){
    let listItems = ""
    for(let i =0; i < leads.length;i++){
        listItems +=`
        <li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>
        `
    }
    ulEl.innerHTML = listItems
}

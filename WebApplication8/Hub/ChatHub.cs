using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace WebApplication2
{
    [HubName("ChatHub")]
    //THIS IS HUB
    public class ChatHub : Hub
    {

        public void sendmessage(string name, string message)
        {
            //function : pushing content (Name , Message )
            Clients.All.PushMessage(name, message);
        }
    }
}
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.InputStreamReader;
import java.io.FileInputStream;
import java.io.BufferedReader;
import java.util.List;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class Messages extends HttpServlet{
    public Messages(){
        super();
    }
    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException{
        response.setContentType("text/html;charset=UTF-8");
        response.setCharacterEncoding("utf-8");
        OutputStream out=response.getOutputStream();
        String title="Messages";
        String htmlHead="<!DOCTYPE html>"+
                    "<html>"+
                        "<head>"+
                            "<meta charset=\"UTF-8\">"+
                            "<title>"+title+"</title>"+
                            "<link rel=\"stylesheet\" type=\"text/css\" href=\"main.css\">"+
                        "</head>"+
                        "<body>"+
                            "<div id=\"header\" class=\"header\"></div>"+
                            "<h3 align=\"center\">"+"Messages"+"</h3>"+
                            "<table id=\"msgtb\">";
        String htmlTail=    "</table>"+
                            "<div class=\"footer\" id=\"footer\"></div>"+
                            "<script src=\"main.js\" charset=\"utf-8\"></script>"+
                        "</body>"+
                    "</html>";
        // System.out.println("Messages Log: Start");
        List<String> msg=new ArrayList<String>();
        List<String> msgt=new ArrayList<String>();
        BufferedReader fin=new BufferedReader(new InputStreamReader(new FileInputStream("D://message.txt"),"UTF-8"));
        String temp=null;
        while((temp=fin.readLine())!=null){
            msgt.add(temp);
            StringBuilder one=new StringBuilder();
            while((temp=fin.readLine())!=null){
                if(temp.equals("#LINE_END#"))break;
                one.append(temp);
                // System.out.println("Messages Log: one.append "+temp);
            }
            msg.add(one.toString());
        }
        int cnt=msg.size();
        StringBuilder htmlMsg=new StringBuilder();
        for(int i=cnt-1;i>=0;i--){
            htmlMsg.append("<tr><td><div id=\"msgid\">#"+(i+1)+"</div><div id=\"msg\">"+msg.get(i)+"</div><div id=\"msgTime\">"+msgt.get(i)+"</div></td></tr>");
        }
        String html=new String(htmlHead+htmlMsg.toString()+htmlTail);
        // System.out.println("Messages Log: "+html);
        out.write(html.getBytes("utf-8"));
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException{
        doGet(request,response);
    }
}
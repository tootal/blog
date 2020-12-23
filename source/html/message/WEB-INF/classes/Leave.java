import java.io.IOException;
import java.io.OutputStream;
import java.io.FileOutputStream;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class Leave extends HttpServlet{
    public Leave(){
        super();
    }
    public void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException{
        response.setContentType("text/html;charset=UTF-8");
        OutputStream out=response.getOutputStream();
        String title="Message";
        String raw=new String(request.getParameter("msg").getBytes("ISO8859-1"),"UTF-8");
        StringBuilder msg=new StringBuilder();
        msg.append((new Date().toString())+"\n");
        msg.append(raw+"\n#LINE_END#\n");
        OutputStream fout=new FileOutputStream("D://message.txt",true);
        fout.write(msg.toString().getBytes("utf-8"));
        out.write(("<!DOCTYPE html>"+
                    "<html>"+
                        "<head>"+
                            "<meta charset=\"UTF-8\">"+
                            "<title>"+title+"</title>"+
                            "<link rel=\"stylesheet\" type=\"text/css\" href=\"main.css\">"+
                        "</head>"+
                        "<body>"+
                            "<div id=\"header\" class=\"header\"></div>"+
                            "<h3 align=\"center\">"+"Message success"+"</h3>"+
                            "<div class=\"content\">"+raw+"</div>"+
                            "<div class=\"footer\" id=\"footer\"></div>"+
                            "<script src=\"main.js\" charset=\"utf-8\"></script>"+
                        "</body>"+
                    "</html>"
        ).getBytes("UTF-8"));
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException,IOException{
        doGet(request,response);
    }
}
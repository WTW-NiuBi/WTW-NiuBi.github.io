var posts=["2023/10/30/Axios学习笔记/","2023/10/23/AJAX学习笔记/","2022/11/04/Floyd算法/","2023/11/05/JavaScript高级学习笔记/","2022/09/04/VS-Code常用快捷键/","2023/11/12/ES6-11学习笔记/","2023/11/12/Vue全家桶学习笔记/","2023/10/22/JavaScript基础学习笔记/","2023/10/11/css应用-简单实例制作（一）/","2023/10/11/css应用-简单示例制作（二）/","2023/10/15/css应用-进阶实例制作（一）/","2023/10/15/css应用-进阶实例制作（三）/","2023/10/15/css应用-进阶实例制作（二）/","2023/10/15/css应用-进阶实例制作（四）/","2022/10/21/dijkstra算法/","2023/10/16/git学习笔记/","2022/03/05/html学习笔记（一）/","2023/10/09/html应用-简单实例制作（一）/","2022/03/27/html学习笔记（二）/","2023/10/10/html应用-简单实例制作（三）/","2023/10/10/html应用-简单实例制作（二）/","2023/10/10/html应用-简单实例制作（四）/","2022/03/11/java学习笔记-四/","2022/03/30/java学习笔记（七）/","2022/03/05/java学习笔记（一）/","2022/05/04/java学习笔记（九）/","2022/03/09/java学习笔记（三）/","2022/03/07/java学习笔记（二）/","2022/03/20/java学习笔记（五）/","2022/03/27/java学习笔记（六）/","2022/04/13/java学习笔记（八）/","2022/10/12/st表/","2022/09/08/前缀和与差分/","2022/09/19/二叉树的遍历/","2022/03/27/并查集/","2022/11/13/线段树/","2022/10/08/静态测试与FMEA/","2022/10/26/邻接表/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };

#[derive(Debug, PartialEq, Clone, PartialOrd, Serialize)]
pub enum AstElement {
    IntLiteral {
        val: i64,
    },
    FloatLiteral {
        val: f64,
    },
    StringLiteral {
        val: String,
    },
    BoolLiteral {
        val: bool,
    },
    Ident {
        name: String,
    },
    UnaryExpr {
        expr: Box<AstNode>,
        operator: char,
    },
    BinaryExpr {
        left: Box<AstNode>,
        right: Box<AstNode>,
        operator: String,
    },
    FunctionCall {
        left: Option<Box<AstNode>>,
        name: String,
        args: Vec<AstNode>,
    },
    If {
        condition: Box<AstNode>,
        body: Vec<AstNode>,
        else_body: Vec<AstNode>,
    },
    While {
        condition: Box<AstNode>,
        body: Vec<AstNode>,
    },
    LetBinding {
        name: Box<AstNode>,
        expr: Box<AstNode>,
    },
    Function {
        name: String,
        arg_names: Vec<String>,
        body: Vec<AstNode>,
    },
}

#[derive(Debug, PartialOrd, PartialEq, Clone, Serialize)]
pub struct Position(pub (usize, usize), pub (usize, usize));

#[derive(Debug, PartialEq, Clone, PartialOrd, Serialize)]
pub struct AstNode {
    pub element: AstElement,
    pub position: Position,
}



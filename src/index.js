const production = process.env.NODE_ENV || 'production';
export default function({types: t }) {
  return {
    visitor: {
        MemberExpression(path) {
            if (path.get("object").matchesPattern("process.env") && (path.node.property.name ==='NODE_ENV' )){
                path.replaceWith(t.valueToNode(production));
            }
        }
    }
  };
}

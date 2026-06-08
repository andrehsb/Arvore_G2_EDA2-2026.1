import { ReportResponse } from "../api";

export class TreeNode {
    key: number;
    data: ReportResponse;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    color: 'RED' | 'BLACK' = 'RED';

    constructor(key: number, data: ReportResponse) {
        this.key = key;
        this.data = data;
    }
}

export class RedBlackTree {
    root: TreeNode | null = null;

    public insert(key: number, data: ReportResponse) {
        // gigi
    }
    public getLatest(limit: number): ReportResponse[] {
        const result: ReportResponse[] = [];
        const reverseInOrder = (node: TreeNode | null) => {
            //condição de parada de recursão
            if (node === null || result.length >= limit) return;

            //vai o mais para a direita possível (mais recentes)
            reverseInOrder(node.right);

            // visita a Raiz e insere no array manipulando o índice
            if (result.length < limit) {
                result[result.length] = node.data;
            }

            //anda para a esquerda (mais antigos)
            if (result.length < limit) {
                reverseInOrder(node.left);
            }
        };
        reverseInOrder(this.root);
        return result;
    }
}
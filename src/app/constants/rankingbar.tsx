interface RankingBarProps {
    rank: number;
    position: number;
}

export default function RankingBar({ rank, position }: RankingBarProps, ) {
    const positionData = [
        {pos: "justify-items-end"},
        {pos: "justify-items-start"},
    ];

    const rankData = [
        { width: "w-2/7", text: "Knowledge", background: "bg-orange-500" },
        { width: "w-3/7", text: "Amateur", background: "bg-amber-500" },
        { width: "w-4/7", text: "Beginner", background: "bg-cyan-500" },
        { width: "w-5/7", text: "Advanced", background: "bg-teal-500" },
        { width: "w-6/7", text: "Expert", background: "bg-sky-500" },
    ];

    // Validar que el rango esté entre 1 y 5
    const validRank = Math.min(Math.max(rank, 1), 5);

    // Validar que el rango esté entre 1 y 2
    const pos = Math.min(Math.max(position, 1), 2) === 1 ? positionData[0].pos : positionData[1].pos;

    // Validar que el índice sea válido antes de desestructurar
    const rankItem = rankData[validRank - 1];
    if (!rankItem) {
        return (
            <div className="w-full bg-red-500 rounded-md h-7 mt-2 flex items-center justify-center">
                <p className="text-white font-semibold">Error: Rango inválido</p>
            </div>
        );
    }

    const { width, text, background } = rankItem;

    return (
        <div className={`w-full bg-white rounded-xs h-5 mt-2 ${pos} `}>
            <div className={`rounded-md h-full ${background} ${width} flex items-center justify-center text-xs`}>
                <p className="text-white font-semibold">{text}</p>
            </div>
        </div>
    );
}
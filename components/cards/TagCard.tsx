import ROUTES from "@/constants/routes";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount: boolean;
  compact: boolean;
}
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconClass = getDeviconClassName(name);
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="bg-[#faf5ff] dark:bg-[#2a004d] text-[#3a0066] dark:text-[#BFA5E2] rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="text-[#1a0033] dark:text-[#BFA5E2] "> {questions}</p>
      )}
    </Link>
  );
};

export default TagCard;

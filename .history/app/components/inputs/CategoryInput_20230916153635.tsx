"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

export default function CategoryInput({
  icon: Icon,
  label,
  selected,
  onClick,
}: CategoryInputProps) {
  return;
  <div onClick={() => onClick(label)} className={``}></div>;
}
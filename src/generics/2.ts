type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
type TypeTop = Pick<AllType, "name" | "color">;
type TypeBottom = Pick<AllType, "position" | "weight">;

function compare<T extends TypeTop, U extends TypeBottom>(
  top: T,
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
